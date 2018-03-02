import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Popup extends Component {

	constructor( state ) {
		super( state );
		this.state = {
			title : state.title
		};
		this.toggleActiveClass = this.toggleActiveClass.bind( this );
	}

	toggleActiveClass() {

	}

	render() {
		return (
			<div className='popup'>
				<header className='popup__header'>
					<h3 className='popup__title'>{ this.state.title }</h3>
					<FontAwesome name='fas fa-close' onClick={ this.state.closePopup } />
				</header>
				<form className='popup__form' action="">
					<textarea className='popup__input' type="text"></textarea>
					<button className='popup__button'>{ this.state.title }</button>
				</form>
			</div>
		);
	}
}

export default Popup;
