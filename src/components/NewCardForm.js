import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      emoji: '',
      errorMessages: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    const updatedState = this.state;
    updatedState[fieldName] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text.length > 0 || this.state.emoji !== "none" ) {
      this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji,
      });
      this.setState({
        text: '',
        emoji: '',
      });
    }
  }

  generateEmojis = () => {
    const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

    const emojiOptions = EMOJI_LIST.map((emojiText) => {
      return (
        <option key={emojiText} value={emojiText}>{emojiText.length > 0 ? emoji.getUnicode(emojiText): ""}</option>
      );
    });
    return emojiOptions;
  }

  render() {
    return (
      <div className="new-card-form">

        <h2 className="new-card-form__header">Write A New Note</h2>
        <div className="validation-errors">
          {this.state.errorMessages}
        </div>
        <div >
          <form onSubmit={this.onSubmit} className="new-card-form__form" >
            <label htmlFor="text" className="new-card-form__form-label">Note</label>
            <textarea name="text" onChange={this.onFieldChange} value={this.state.text} className="new-card-form__form-textarea" />
            <label htmlFor="emoji" className="new-card-form__form-label">Mood</label>
            <select name="emoji" onChange={this.onFieldChange} value={this.state.emoji} className="new-card-form__form-select">
              {this.generateEmojis()}
            </select>
            <button type="submit" className="new-card-form__form-button">Add Note</button>
          </form>
        </div>

      </div>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}


export default NewCardForm;
