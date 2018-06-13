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
    }
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  seeState = () => {
    console.log(this.state.text);
    console.log(this.state.emoji);
  }

  render() {
    return(
      <form>
        <div>
          <label htmlFor="text">Message: </label>
          <textarea name="text" value={this.state.text} onChange={ this.onFieldChange }/>
        </div>
        <div>
          <label htmlFor="emoji">Emoji: </label>
          <select name="emoji" value={this.state.emoji} type="number" onChange={ this.onFieldChange }/>
        </div>
      </form>
    )
  }
}

export default NewCardForm;
