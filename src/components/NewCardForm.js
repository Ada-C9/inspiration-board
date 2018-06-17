import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    };
  }

  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue

    this.setState(updateState);
  }

  onDropDownChange = (option) => {
    const emojiValue = option.value
    this.setState({
      emoji: emojiValue
    })

  }

  valid = () => {
    return this.state.text.length > 0
  }

  clearForm = () => {
    this.setState({
    text: '',
    emoji: ''
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.valid()) {
      this.props.addCardCallback(this.state);
      this.clearForm();
    }
  }

  emojiList() {
    return EMOJI_LIST.map((name) => {
      return (
        {
          value: name,
          label: name ? emoji.getUnicode(name) : "Select an option"

        }
      );
    });
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="new-card-form">
        <div>
          <h4 className="new-card-form__header">Add some Inspo</h4>
          <label className="new-card-form__form-textarea" htmlFor="text">Inspiration: </label>
          <textarea name="text" value={this.state.text} onChange={this.onFieldChange} />
        </div>

        <Dropdown options={this.emojiList()} onChange={this.onDropDownChange} name="emoji" value={emoji.getUnicode(this.state.emoji)} placeholder="Select an Emoji" />

        <input className="new-card-form__form-button" type="submit" value="Add Card" />

      </form>
    )
  }


}

export default NewCardForm;
