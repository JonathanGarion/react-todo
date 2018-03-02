import React, { Component } from 'react';
import Column from './Column.jsx';

class Container extends Component {

	render() {
		return (
			<div className="todo-container">
				<Column name='To Do' />
				<Column name='In Progress' />
				<Column name='Done' />
			</div>
		);
	}
}

export default Container;
