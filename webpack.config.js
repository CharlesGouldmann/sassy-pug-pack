const path = require('path');
const webpack = require('webpack');

// Loaders
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	// Entry and Output
	entry: './source/index.js',
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	
	// Devserver
	devServer: {
		contentBase: './dist',
		hot: true,
		inline: true,
	},
	
	// Rules
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.pug$/,
				use: [
					'html-loader',
					'pug-html-loader'
				]
			},
			{
				test: /\.scss/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		],
	},

	// Plugins
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: './source/index.pug',
			output: './dist/'
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]

}