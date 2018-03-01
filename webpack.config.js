const webpack = require('webpack');
const Path = require('path');
const Html_Webpack_Plugin = require('html-webpack-plugin');
const Style_Lint_Plugin   = require('stylelint-webpack-plugin');
const Extract_Text_Plugin = require('extract-text-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
	entry: './client/index.jsx',
	output: {
		filename: './build/bundle.[hash].js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
				include: Path.join(__dirname, 'client')
			},
			{
				test: /\.scss$/,
				use: Extract_Text_Plugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								publicPath: '/build/css'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => {
									return [
										require('autoprefixer')
									];
								},
								publicPath: '/build/css'
							}
						},
						{
							loader: 'sass-loader',
							options: {
								publicPath: '/build/css'
							}
						},
					]
				})
			}
		]
	},
	plugins: [
		new Html_Webpack_Plugin({
			template: './index.html'
		}),
		new Extract_Text_Plugin({
			filename: 'main.css'
		}),
		new Style_Lint_Plugin({
			options: {
				configFile: '.stylelintrc',
				context: 'scss/main.scss',
				syntax: 'scss'
			}
		}),
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true
	}
};
