import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
	static propTypes = {
		text: PropTypes.string,
		emoji: PropTypes.string
	}

	render() {
		return (
			<div className="card">
				<section className="card__content">
					<p className="card__content-text">{this.props.text}</p>
					<div className="card__content-emoji">{this.props.emoji}</div>
				</section>
				<section>{this.props.emoji}</section>
			</div>
		)
	}
}

Card.propTypes = {

};

export default Card;
