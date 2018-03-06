import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';
import Popup from './Popup.jsx';
import FontAwesome from 'react-fontawesome';

class Column extends Component {

	constructor( state ) {
		super( state );

		this.state = {
			tasks     : [],
			apiUrl    : 'http://localhost:3001/api/tasks',
			name      : state.name,
			status    : state.status,
			showPopup : false
		};
	}

	// componentDidMount() {

	// 	fetch( 'http://localhost:3001/api/tasks' )
	// 		.then(( response ) => response.json())
	// 		.then(( state ) => this.setState( { status : state.status } ));
	// 		console.log( state + ' ' + response );
	// }

	updateTasks() {
		fetch( this.state.apiUrl, {
			method: 'GET'
		})
		.then( results => {
			return results.json();
		})
		.then( resultsjson => {
			let sortedList = this.sortTasks(resultjson);
			this.setState({
				tasks: sortedList
			});
		});
	}

	togglePopup() {
		this.setState( {
			showPopup : !this.state.showPopup
		} );
	}

	render() {
		return (
			<div className='grid-column'>
				<header className='grid-column__header'>
					<h2>{ this.state.name }</h2>
					<FontAwesome
						className='grid-column__add-icon'
						onClick={ this.togglePopup.bind( this ) }
						name='fas fa-plus-square'
					/>
				</header>
				<ul className='grid-column__list'>
					<TodoItem content='Set up HTML with BEM structure'/>
					<TodoItem content='Add SCSS (use advanced features)'/>
					<TodoItem content='Set up Back-end'/>
				</ul>
				{ this.state.showPopup ?
					<Popup
						title='Add'
						closePopup={ this.togglePopup.bind( this ) }
					/>
					: null
				}
			</div>
		);
	}
}

export default Column;
