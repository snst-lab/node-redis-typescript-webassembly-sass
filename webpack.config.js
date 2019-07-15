const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = [
	{
		mode: process.env.NODE_ENV || 'development', // 'production'
		target: 'node',
		externals: [ nodeExternals() ],
		devtool: 'inline-source-map',
		entry: {
			'build/server': './src/server/main.ts'
		},
		output: {
			path: __dirname,
			publicPath: './build/',
			filename: '[name].js'
		},
		resolve: {
			// Add `.ts` and `.tsx` as a resolvable extension.
			extensions: [ '.ts', '.tsx', '.js' ]
		},
		module: {
			rules: [
				{
					// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
					test: /\.ts$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					enforce: 'pre',
					test: /\.tsx?$/,
					use: [
						{
							loader: 'tslint-loader',
							options: {
								typeCheck: true,
								fix: true
							}
						}
					]
				}
			]
		}
	},
	{
		mode: process.env.NODE_ENV || 'development', // 'production'
		devtool: 'inline-source-map',
		entry: {
			'build/public/script/main': './src/public/script/main.ts'
		},
		output: {
			path: path.resolve(__dirname, 'build/public/script'),
			publicPath: './build/public/script/',
			filename: 'main.js'
		},
		resolve: {
			// Add `.ts` and `.tsx` as a resolvable extension.
			extensions: [ '.ts', '.tsx', '.js', '.wasm' ]
		},
		module: {
			rules: [
				{
					// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
					test: /\.ts$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					enforce: 'pre',
					test: /\.tsx?$/,
					use: [
						{
							loader: 'tslint-loader',
							options: {
								typeCheck: true,
								fix: true
							}
						}
					]
				},
				{
					test: /\.wasm$/,
					type: 'webassembly/experimental'
				}
			]
		}
	}
];
