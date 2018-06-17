import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

class NewCardForm extends Component {

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    };
  }

  onInputChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    let updatedInput = {};
    updatedInput[key] = value;
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

  getEmojis = () => {
    const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

    const emojis = EMOJI_LIST.map((emojiText) => {
      let emojiPicture = emoji.getUnicode(emojiText);
      return (
        <option key={emojiText} value={emojiText}>{emojiPicture}</option>
      );
    });
    return emojis
  }

  render() {
    return (
      <section className="new-card-form">
        <h1 className="new-card-form__header">Compose a message: </h1>
        <form className="new-card-form__form" onSubmit={this.onFormSubmit}>

          <label htmlFor="text" className="new-card-form__form-label">Message</label>
          <textarea name="text" className="new-card-form__form-textarea" onChange={this.onInputChange} value={this.state.text}></textarea>

          <label htmlFor="emoji" className="new-card-form__form-label">Emoji</label>
          <select name="emoji" className="new-card-form__form-select" value={this.state.emoji} onChange={this.onInputChange}>{this.getEmojis()}</select>

          <button type="submit" className="new-card-form__form-button">
            Submit
          </button>

        </form>
      </section>
    );
  }

}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
