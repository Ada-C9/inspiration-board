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
      emoji:" "
    }
  }


  render() {
    return (
      <form>
        <div>
          <label htmlFor="message">Message: </label>
          <input
            name="message"
            value={this.state.message}
          />
        </div>
        <div>
          <label htmlFor="emoji">Emoji: </label>
          <input
            name={this.state.emoji}
            value=" "
          />
        </div>
        <input type="submit" value="Add Card" />
      </form>
    )
  }
}

export default NewCardForm;
