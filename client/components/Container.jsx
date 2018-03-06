import React, { Component } from 'react';
import Column from './Column.jsx';

class Container extends Component {

	render() {
		return (
			<div className="todo-container">
				<Column name='To Do' status='todo' />
				<Column name='In Progress' status='in-progress' />
				<Column name='Done' status='done' />
			</div>
		);
	}
}

export default Container;
