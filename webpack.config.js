const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'client');

const config = {
	devtool: 'source-map',
	entry: {
		app: ['babel-polyfill', APP_DIR + '/index.js', 'webpack-dev-server/client?http://0.0.0.0:8080']
	},
	output: {
		path: BUILD_DIR,
		publicPath: '/public/',
		filename: '[name].js',
	},
	plugins: [
    new FlowBabelWebpackPlugin()
	],
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: [/node_modules/, 'public'],
				loader: 'eslint-loader'

			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			},
      {
        test: /\.(ttf|eot|svg|woff)/,
        use: 'file-loader?name=assets/fonts/[hash].[ext]'
      }
		]
	}
};

module.exports = config;
