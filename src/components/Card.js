import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
	static propTypes = {
		text: PropTypes.string,
		emoji: PropTypes.string,
		deleteCardCallback: PropTypes.func
	}

	deleteCard = () => {

	}

	render() {
		const myEmoji = emoji.getUnicode( this.props.emoji || "smile");

		return (
			<div className="card">
				<section className="card__content">
					<p className="card__content-text">{ this.props.text }</p>
					<p className="card__content-emoji">{ myEmoji }</p>
				</section>
				<button onClick={ this.deleteCard }>Take it!</button>
			</div>
		)
	}
}

Card.propTypes = {

};

export default Card;
