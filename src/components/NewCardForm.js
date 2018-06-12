import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    };
  }

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;

    this.setState( updatedInput );
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addCardCallback(this.state);

    this.setState = ({
      text: '',
      emoji: ''
    });
  }

  render() {

    return (
      <form nameClass="new-card-form"
        onSubmit={this.onFormSubmit}>
        <h2 nameClass="new-card-form__header">Create New Post</h2>
        <div>
          <label
            nameClass="new-card-form__form-label" htmlFor="text">text
          </label>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onInputChange}
            />
        </div>

        <div>
          <label nameClass="new-card-form__form-label" htmlFor="emoji">Emoji</label>
          <input
            type="text"
            name="emoji"
            value={this.state.emoji}
            onChange={this.onInputChange}
            />
        </div>

        <div nameClass="new-card-form__form-button"><input type="submit" /></div>
      </form>
    );
  }
}

export default NewCardForm;
