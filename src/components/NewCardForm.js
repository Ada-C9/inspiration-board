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
  };

  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state);
    this.clearForm();
  };

  render() {
    const emojiOptions = EMOJI_LIST.map((emoji, index) => {
      return <option key={index} >
      { emoji }
      </option>;
    });

    return (
      <form onSubmit={this.onFormSubmit}className="new-card-form">
      <h3 className="new-card-form__header">Add a new inspirational note to this board!</h3>
      <div className="new-card-form__form">
      <label htmlFor="text" className="new-card-form__form-label" >Message</label>
      <input
      type="text"
      name="text"
      value={this.state.text}
      onChange={this.onFieldChange}
      className="new-card-form__textarea"
      />
      </div>
      <div>
      <label htmlFor="emoji" className="new-card-form__form-label">Emoji (optional)</label>
      <select
      name="emoji"
      value={this.state.emoji}
      onChange={this.onFieldChange}
      type="text"
      className="new-card-form__form-select"
      >
      { emojiOptions }
      </select>
      </div>
      <div>
      <input type="submit" value="Add Card" className="new-card-form__form-button" />
      </div>
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
