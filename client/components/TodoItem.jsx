import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class ListItem extends Component {

	constructor( state ) {
		super( state );
		this.state = {
			content : state.content
		};
	}

	render() {
		return (
			<li className='todo'>
				<ul className='todo__list'>
					<li className='todo__list-item'><FontAwesome name='fas fa-pencil-square' /></li>
					<li className='todo__list-item'><FontAwesome name='fas fa-trash' /></li>
					<li className='todo__list-item'><FontAwesome name='fas fa-bars' /></li>
				</ul>
				<div className='todo__content'>{ this.state.content }</div>
			</li>
		);
	}
}

export default ListItem;
