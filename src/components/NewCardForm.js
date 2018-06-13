import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
      emoji: ''
    }
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};

    updateState[fieldName] = fieldValue;
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

  selectDropdown = (event) => {
    const dropdownName = event.target.name;
    const dropdownValue = event.target.value;
    const updateState = {}

    updateState[dropdownName] = dropdownValue;
    this.setState(updateState);
  }

  clearForm = () => {
    this.setState({
      text: '',
      emoji: ''
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addCardCallback(this.state);

    this.clearForm();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="text">
            Message:
            <input
              name="text"
              value={this.state.message}
              onChange={this.onFieldChange}
              type="text"
              id="text"
            />
          </label>
        </div>
        <div>
          <label htmlFor="emoji">
            Emoji:
            <select name="emoji" value={this.state.emoji} onChange={this.selectDropdown}>
              {this.emojiDropdown()}
            </select>
          </label>
        </div>
        <input type="submit" value="Add Card" />
      </form>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
}

export default NewCardForm;
