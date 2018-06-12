import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      card: {
        text: '',
        emoji: ''
      }
    }
  }

  onInput = (event) => {
    let updatedMessage = {};
    updatedMessage[event.target.name] = event.target.value
    this.setState({ card: updatedMessage })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.props.addCardCallback(this.state);
  }

  render () {
    const emojiList = EMOJI_LIST.map((char, index) =>{
      return (
        <option
        key={index}
        value={char}>{char}</option>
      );
    })

    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="text">Message </label>
          <input
          type="text"
          name="text"
          value={this.state.value}
          onChange={this.onInput}/>
        </div>

        <div>
          Emoji <select
          value={this.state.value}
          onChange={this.onInput}
          name="emoji">
            {emojiList}
          </select>
        </div>

        <div><input type="submit"/></div>
      </form>
    );
  }
}

export default NewCardForm;
