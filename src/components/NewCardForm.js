import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["smile", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "cat", "flower", "thinking_face"];

class NewCardForm extends Component {

	constructor() {
		super();

		this.state = {
			text: '',
			emoji: ''
		}
	}

	onInputChange = (event) => {
		// console.log(event.target.value);
		const newState = {};
		newState[event.target.name] = event.target.value;
		console.log(newState);
		this.setState( newState )
	}

	render() {
		const emojis = EMOJI_LIST.map( (emo) => {
			return <option>{emoji.getUnicode(emo)}</option>
		})

		return(
			<form className="form">
				<label htmlFor="text">Messages</label>
				<input
					name="text"
					value={ this.state.emoji }
					onChange={ this.onInputChange }
				/>
				<label htmlFor="emoji">Emoji
					<select
						name='emoji'
						value={ this.state.emoji }
						onChange={ this.onInputChange }>
						{ emojis }
					</select>
				</label>

			</form>
		)
	}
}
export default NewCardForm
