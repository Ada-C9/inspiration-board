import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';
import emoji from 'emoji-dictionary';


const EMOJI_LIST = ["smile", "heart_eyes", "beer", "clap",
"sparkling_heart", "heart_eyes_cat", "dog", "cat", "100", "bird"];

class NewCardForm extends Component {
	static propTypes = {
		createNoteCallback: PropTypes.func
	}

	constructor() {
		super();

		this.state = {
			text: '',
			emoji: '',
		}
	}

	onInputChange = (event) => {
		const newState = {};
		newState[event.target.name] = event.target.value;
		this.setState( newState )
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.createNoteCallback(this.state);
		this.setState({
			text: '',
			emoji: ''
		})
	}

	render() {
		const emojis = EMOJI_LIST.map( (emo, index) => {
			return  <option key={ index } value={ emo }>
				{ emoji.getUnicode( emo || "smile") }</option>
			})

			return(
				<form className="form" onSubmit={ this.onFormSubmit }>
					<div>
						<label htmlFor="text">Messages</label>
						<textarea
							name="text"
							value={ this.state.text }
							onChange={ this.onInputChange }
						/>
					</div>
					<div>
						<label htmlFor="emoji">Emoji
							<select
								name="emoji"
								value={ this.state.emoji.value }
								onChange={ this.onInputChange }>
								{ emojis }
							</select>
						</label>

					</div>
					<div>
						<input
							type="submit"
							value="Create a note"
						/>
					</div>
				</form>
			)
		}
	}
	export default NewCardForm
