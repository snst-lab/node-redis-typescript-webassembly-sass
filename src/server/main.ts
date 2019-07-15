'use strict';
import * as root from 'app-root-path';
import * as express from 'express';
express.static.mime.define({'application/wasm': ['wasm']});
import * as redis from 'redis';

/**
 * Configure Redis
 */
const client: redis.RedisClient = redis.createClient(6379, 'redis');
client.on('connect', () => console.log('Connected to Redis'));
client.set('visit', '0');

/**
 * Configure Web Server
 */
const app: express.Application = express();
app.use(express.static('.'));
app.get('/', (_req: express.Request, res: express.Response) => {
    res.sendFile(root as unknown as string + '/index.html');
});

app.post('/api',  (_req: express.Request, res: express.Response) => {
    client.get('visit', (_err: Error|null , visit: string) => {
      res.send('POST request received. Number of Visits:' + visit);
      client.set('visit', String(parseInt(visit, 10) + 1));
  });
});

// tslint:disable-next-line:typedef
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}`));
