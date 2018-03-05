const Mongoose = require( 'mongoose' );
const Schema   = Mongoose.Schema;

const Task_Schema = new Schema( {
	content: String,
	status: {
		type: String,
		enum: [
			'todo',
			'in-progress',
			'done'
		],
		default: 'todo'
	}
});

module.exports = Mongoose.model( 'Task', Task_Schema );
