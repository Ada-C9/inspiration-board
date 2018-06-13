import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  // initial state of form input field
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <form>
      <label htmlFor="text">Words: </label>
      <input type="text"
      name="text"
      value={this.state.text} />
      </form>
    );
  }
}

export default NewCardForm;
