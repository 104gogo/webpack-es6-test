export default {
 	module: {
    	loaders: [
		    {
		      test: /\.js$|\.jsx$/,
		      loaders: [ 'babel' ],
		      exclude: /node_modules/
		    }
		]
  	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};