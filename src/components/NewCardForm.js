import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super()

    this.state = {
      message:"",
      emoji:""
    }
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};

    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  };

  emojiDropdown = () => {
    let options = EMOJI_LIST.map((icon, index) => {
      this.emoji = emoji.getUnicode(icon)

      return <option key={index} value={`${icon}`}>{this.emoji}</option>;
    })

    return options

  }

  // getEmoji = (emojiIcon) => {
  //   this.emoji = emoji.getUnicode(emojiIcon);
  //   return this.emoji;
  // };

  render() {
    return (
      <form>
        <div>
          <label htmlFor="message">
            Message:
            <input
              name="message"
              value={this.state.message}
              onChange={this.onFieldChange}
              type="text"
              id="message"
            />
          </label>
        </div>
        <div>
          <label htmlFor="emoji">
            Emoji:
            <select value={this.state.emoji}>
              {this.emojiDropdown()}
            </select>
          </label>
        </div>
        <input type="submit" value="Add Card" />
      </form>
    )
  }
}

export default NewCardForm;
