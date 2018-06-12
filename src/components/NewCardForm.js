import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "grin"]

class NewCardForm extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    }
  }

  getEmojiOptions = () => {
    return EMOJI_LIST.map((emojiText, index) => {
      return <option key={index} value={emojiText}>{emoji.getUnicode(emojiText)}</option>
    })
  }

  onFormChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state)
  }

  render () {
    return (
      <section className="new-card-form">
        <h3 className="new-card-form__header">Add a new card: </h3>
        <form
          className="new-card-form__form"
          onSubmit={this.onFormSubmit}
        >
          <label
            htmlFor='text'
            className="new-card-form__form-label"
            placeholder="Card Text"
          >
          Card Text:
          </label>
          <input type='text' name='text' className="new-card-form__form-textarea" onChange={this.onFormChange}/>
          <label
            htmlFor='emoji'
            className="new-card-form__form-label"
          >
            Emoji:
          </label>
          <select name='emoji' className="new-card-form__form-select" onChange={this.onFormChange}>
            {this.getEmojiOptions()}
          </select>
          <input className="new-card-form__form-button" type="submit"/>
        </form>

      </section>
    )
  }
}

export default NewCardForm;
