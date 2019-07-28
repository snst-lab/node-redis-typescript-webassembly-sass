// Import { default as init } from '../wasm/pkg/wasm.js';

(async() => {
    // Await init('./src/public/wasm/pkg/wasm_bg.wasm');
    console.log('Succeed to GET');

})().catch(() => 'Failed to load wasm.');
