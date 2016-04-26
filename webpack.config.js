var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: './test.jsx',
	output: {
	    path: path.join(__dirname, 'build'),
	    filename: 'bundle.js'
  	},
  	module: {
	    loaders: [
		    {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel", query: {presets: ['es2015', 'react']}}
	    ]
	}
}