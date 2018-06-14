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
      emoji: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  valid = () => {
    return this.state.text.length > 0 ||
           this.state.emoji.length > 0;
  }

  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.valid()) {
      this.props.addCardCallback(this.state);
      this.clearForm();
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='new-card-form'>

        <label htmlFor="text" >Message: </label>
        <input
          name="text"
          value={this.state.text}
          onChange={this.onFieldChange}
          className='new-card-form__form-textarea'
          />

        <label htmlFor="emoji" >Emoji: </label>
        <input
          name="emoji"
          value={this.state.emoji}
          onChange={this.onFieldChange}
          type="text"
          className='new-card-form__form-textarea'
          />

        <input type="submit" value="Add Card" className='new-card-form__form-button' />

      </form>
    );
  }

}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
