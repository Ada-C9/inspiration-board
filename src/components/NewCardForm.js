import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    }
  }

  onInputChange = (event) => {
    this.setState({text: event.target.value})
;  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("on form submit");

    this.props.addCardCallback(this.state);

    console.log(this.state);
    this.setState({
      text: '',
      emoji: ''
    });
    console.log(this.state);
  }

  render() {
    const emojiList = EMOJI_LIST.map((emojiWord, index) => {
     return <option key={index} value= {emojiWord}>{ emoji.getUnicode(emojiWord)}</option> })

    return (
      <form className="new-card-form" onSubmit={this.onFormSubmit}>

        <div className="new-card-form__header">Add a card
        </div>

          <div className="new-card-form__form">
            <label className="new-class-form__form-label"
            htmlFor="text">Message</label>
            <input
            className="new-class-form__form-textarea"
            type="text"
            id="text"
            value={this.state.text}
            onChange={this.onInputChange}/>
          </div>

          <div className="new-card-form__form">
            <label className="new-class-form__form-label"
            htmlFor="emoji">Emoji</label>
            <select
            className="new-card-form_form-select">
            name="emoji"
            value={this.state.emoji}
            onChange={this.onInputChange}
              {emojiList}
            </select>
          </div>

        <div><input className="new-class-form__form-button" type="submit"/>
        </div>
      </form>
    );
  }
}

export default NewCardForm;
