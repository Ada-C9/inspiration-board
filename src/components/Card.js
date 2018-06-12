import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

	static propTypes = {
		text: PropTypes.string,
		emoji: PropTypes.string
	}

	getEmoji = () => {
		if (this.props.emoji !== undefined && this.props.emoji != null) {
			return <div className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</div>
		}
	}

	getText = () => {
		if (this.props.text !== undefined && this.props.text != null) {
			return <p className="card__content-text">{this.props.text}</p>
		}
	}


	render() {
		return (
			<div className="card">
				<section className="card__content">
					{this.getText()}
					{this.getEmoji()}
				</section>
			</div>
		)
	}
}


export default Card;
