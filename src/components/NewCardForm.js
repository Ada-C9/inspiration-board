import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI = require("emoji-dictionary");
const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    }
  }

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state);

    this.setState({
      text: '',
      emoji: ''
    });
  }

  render() {

    const emojiDropDown = EMOJI_LIST.map((emoji) => {

      let uniEmoji = null;
      if (emoji) {
        uniEmoji = EMOJI.getUnicode(emoji);
      }

      return (
        <option className='card__content-emoji' value={emoji}>{uniEmoji}</option>
      )
    });

    return (

      <section className='new-card-form'>

        <h2 className='new-card-form__header'>Add a Card</h2>

        <form className='new-card-form__form' onSubmit={this.onFormSubmit}>

          <label className='new-card-form__form-label' htmlFor='text'></label>
          <input className='new-card-form__form-textarea' placeholder='Enter message here...' type='text' name='text' value={this.state.text} onChange={this.onInputChange} />

          <select className='new-card-form__form-select' name='emoji' value={this.state.emoji} onChange={this.onInputChange} >
            {emojiDropDown}
          </select>

          <button className='new-card-form__form-button' type="submit">
            Post
          </button>

        </form>

      </section>

    )
  }
}

export default NewCardForm;
