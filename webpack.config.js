const WEBPACK             = require('webpack');
const PATH                = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./src/app/index.jsx'
	],
	output: {
		path: PATH.join(__dirname, 'build'),
		filename: 'bundle.js'
	},

}