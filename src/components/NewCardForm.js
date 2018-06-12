import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  }

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
    this.setState(updatedMessage)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
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
      <section className="new-card-form">
      <form className="new-card-form__form" onSubmit={this.onFormSubmit}>

        <div className="new-card-form__header">
          NEW CARD FORM
        </div>

        <div className="new-card-form__form-label">
          <label htmlFor="text">Message </label>
          <input
          type="text"
          name="text"
          value={this.state.value}
          onChange={this.onInput}/>
        </div>

        <div>
          Emoji <select
          className="new-card-form__form-select"
          value={this.state.value}
          onChange={this.onInput}
          name="emoji">
            {emojiList}
          </select>
        </div>

        <div><input className="new-card-form__form-button" type="submit"/></div>
      </form>
      </section>
    );
  }
}

export default NewCardForm;
