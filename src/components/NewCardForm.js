import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = { text: '', emoji: '' }
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};

    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  selectDropdown = (event) => {
    const dropdownName = event.target.name;
    const dropdownValue = event.target.value;
    const updateState = {}

    updateState[dropdownName] = dropdownValue;
    this.setState(updateState);
  }

  emojiDropdown = () => {
    const options = EMOJI_LIST.map((icon, index) => {
      this.emoji = emoji.getUnicode(icon)
      return (
        <option key={index} value={`${icon}`}>
          {this.emoji}
        </option>
      );
    });
    return options;
  }

  clearForm = () => {
    this.setState({ text: '', emoji: '' });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state);
    this.clearForm();
  }

  render() {
    return (
      <section className="new-card-form">
        <form className="new-card-form__form" onSubmit={this.onFormSubmit}>
          <label className="new-card-form__form-label" htmlFor="text">Message:</label>
          <input className="new-card-form__form-textarea"
            name="text"
            value={this.state.text}
            onChange={this.onFieldChange}
            type="text"
          />

          <label className="new-card-form__form-label" htmlFor="emoji">Emoji:</label>
          <select className="new-card-form__form-select" value={this.state.emoji} onChange={this.selectDropdown} name="emoji">
            {this.emojiDropdown()}
          </select>

          <input type="submit" value="Add Card" className="new-card-form__form-button" />
        </form>
      </section>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string
}

export default NewCardForm;
