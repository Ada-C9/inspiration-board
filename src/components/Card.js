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
				<section>{this.props.text}</section>
				<section>{this.props.emoji}</section>
			</div>
		)
	}
}

Card.propTypes = {

};

export default Card;
