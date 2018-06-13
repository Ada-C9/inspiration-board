import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

	static propTypes = {
		addCardCallback: PropTypes.func.isRequired
	}

	constructor(){
		super();
		this.state = {
			text: '',
			emoji: ''
		}
	}

	onInputChange = (event) => {
		let updatedInput = {};
		updatedInput[event.target.name] = event.target.value;

		this.setState( updatedInput );
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.addCardCallback(this.state);

		this.setState({
			text: '',
			emoji: ''
		});
	}

	render(){

		const emojiInput = EMOJI_LIST.map((emo, key) => {
			return <option key={key} name={emo} onChange={this.onInputChange} value={this.state[emo]}>
				{emoji.getUnicode(emo)}
			</option>
		});


		return(
			<form
				className="new-card-form__form"
				onSubmit={this.onFormSubmit}
				>
				<input
					type="text"
					name="text"
					placeholder="Post-It Text"
					value={this.state.text}
					onChange={this.onInputChange}
					className="new-card-form__form-textarea"
					/>

				<select
					name="emoji"
					value={this.state.emoji}
					className="new-card-form__form-select"
					onChange={this.onInputChange}
					>
					{ emojiInput }
				</select>

				<input
					type="submit"
					className="new-card-form__form-button"
					value="Make New Card"
					/>
			</form>
		);
	}
}

export default NewCardForm;
