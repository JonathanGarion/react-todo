const Express = require( 'express' );
const Router  = Express.Router();
const Task    = require( '../models/Task.model.js' );

// middleware for all requests
Router.use( function( req, res, next ) {
	console.log( 'routers in progress' );
	next(); // run next routes and dont stop here
});

Router.get( '/', function( req, res, next ) {
	res.json( {
		"message": "welcome to the todo API"
	});
});

Router.get( '/tasks', function( req, res, next ) {
	Task.find( function( err, tasks ) {
		if ( err ) return next( err );
		res.json( tasks ); // responds with json object of tasks
	});
});

Router.put( '/tasks/:id', function( req, res, next ) {
	const data = req.body;
	const id = req.params.id;

	Task.findByIdAndUpdate( id, data, function( err, tasks ) {
		if ( err ) return next( err );
		res.send( tasks.content + tasks.status + "updated" ); // responds with json object of tasks
	});
});

Router.post( '/tasks/add', ( req, res ) => {
	const newTodo = new Task( req.body );
	newTodo.save()
		.then( data => {
			res.send( 'Todo = ' + data.content + ' saved to database' );
		})
		.catch( err => {
			res.status( 400 ).send( err );
		});
});

module.exports = Router;
