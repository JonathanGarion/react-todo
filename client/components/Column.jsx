import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';
import Popup from './Popup.jsx';
import FontAwesome from 'react-fontawesome';

class Column extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			isLoading : true,
			tasks     : [],
			apiUrl    : 'http://localhost:3001/api/tasks',
			name      : name,
			status    : status,
			showPopup : false
		};
	}

	componentDidMount() {
		this.fetchData()

		// .then(( response ) => response.json())
		// .then(( state ) => this.setState( { status : state.status } ));
		// console.log( state + ' ' + response );
	}

	fetchData() {
		fetch( 'http://localhost:3001/api/tasks' )
		.then(( results ) => {
			return results.json();
		} )
		.then(( resultsjson ) => resultsjson.results.map(( task ) => (
			{
				content : task.content
			}
		)))
		.then(( tasks ) => this.setState( {
			tasks,
			isLoading : false
		} ))
		.catch(( error ) => console.log( 'parsing failed', error ))
	}

	togglePopup() {
		this.setState( {
			showPopup : !this.state.showPopup
		} );
	}

	render() {

		const { isLoading } = this.state;
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
				{

					/* eslint-disable-next-line */
					!isLoading && tasks.length > 0 ? tasks.map(( task ) => { return <TodoItem content='aaaaaaaaa' /> } ) : null
				}
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
