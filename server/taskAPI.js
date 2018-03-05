const Body_Parser     = require( 'body-parser' );
const Mongoose        = require( 'mongoose' );
const Express         = require( 'express' );
const URI             = 'mongodb://localhost/todo';
const Port            = process.env.PORT || 3001;
const Task_Routes     = require( './routers/Task.routers.js' );
const App             = Express();
const Task_Schema     = require('./models/Task.model.js');

Mongoose.Promise = global.Promise;

Mongoose.connect( URI, {
	autoIndex: false,
	reconnectTries: Number.MAX_VALUE, // Dont stop trying to reconnect
	reconnectInterval: 500, // 500 milliseconds between connect attempts
	poolSize: 10, // No more than 10 socket connections
	bufferMaxEntries: 0
}).then(
	() => {
		console.log( "Successful connection to the database" );
	},
	err => {
		console.log( "Couldn't connect to the database, terminating" );
		process.exit();
	}
);

// Middleware for all requests
App.use( function( req, res, next ) {
	res.setHeader( 'Access-Control-Allow-Origin', '*' );
	res.setHeader( 'Access-Control-Allow-Credentials', 'true' );
	res.setHeader( 'Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE' );
	res.setHeader( 'Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers' );
	res.setHeader( 'Cache-Control', 'no-cache' );
	next();
});

App.use( Body_Parser.urlencoded( { extended: true } )); // parse requests of content-type - application/x-www-form-urlencoded
App.use( Body_Parser.json()); // parse requests of content-type - application/json
App.use( '/api', Task_Routes); // Prefix all routes with /api

// Listen for requests
App.listen( Port, function() {
	console.log( "Server is listening on port 3001" );
});
