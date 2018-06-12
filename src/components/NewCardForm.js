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

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);

  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addCardCallback(this.state);

    this.setState({
      text: '',
      emoji: '',

    });
  }

  render() {
    return (
  <div className="new-card-form">

    <h2 className="new-card-form__header">Write a new Card</h2>
    <div className="validation-errors">
      {this.state.errorMessages}
    </div>
    <div >
      <form onFormSubmit={this.onFormSubmit} className="new-card-form__form" >
        <label htmlFor="text" className="new-card-form__form-label">Note</label>
          <textarea name="text" onChange={this.onInputChange} value={this.state.text}
          className="new-card-form__form-textarea" />
        <label htmlFor="emoji" className="new-card-form__form-label">Emoji</label>
          <select name="emoji" onChange={this.onInputChange} value={this.state.emoji}
          className="new-card-form__form-select">

        </select>
        <button type="submit" className="new-card-form__form-button">Submit Card</button>
      </form>
    </div>

  </div>
);
}
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
