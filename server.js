const Webpack = require( 'webpack' );
const Webpack_Dev_Server = require( 'webpack-dev-server' );
const Config = require( './webpack.config' );

new Webpack_Dev_Server( Webpack ( Config ), {
	publicPath: Config.output.publicPath
})
.listen( 3000, '0.0.0.0', function ( err, result ) {
	if ( err ) {
		console.log( err );
	}

	console.log( 'Running at localhost:3000' );
});
