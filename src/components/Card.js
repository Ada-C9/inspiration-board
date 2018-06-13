import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

	static propTypes = {
		id: PropTypes.number,
		text: PropTypes.string,
		emoji: PropTypes.string
	}

	getEmoji = () => {
		if (this.props.emoji != null) {
			return <div className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</div>
		}
	}

	getText = () => {
		if (this.props.text != null) {
			return <p className="card__content-text">{this.props.text}</p>
		}
	}

	onButtonClick = () => {
		this.props.deleteCardCallback(this)
	}


	render() {
		return (
			<div className="card">
				<button
					className="card__delete"
					onClick={this.onButtonClick}
					>
					X
				</button>
				<section className="card__content">
					{this.getText()}
					{this.getEmoji()}
				</section>
			</div>
		)
	}
}


export default Card;
