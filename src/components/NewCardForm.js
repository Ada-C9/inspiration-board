import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      emoji: '',
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addCardCallback(this.state);
    this.clearForm();
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState)
  }

  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='new-card-form'>
        <header className='new-card-form__header'><h1>Add a note</h1></header>
        <div className='new-card-form__form'>
        <label htmlFor='text' className='new-card-form__form-label'>Text: </label>
        <textarea
          name='text'
          value={this.state.text}
          onChange={this.onFieldChange}
          className='new-card-form__form-textarea'
        />
        <select name='emoji'  onChange={this.onFieldChange}
        value={this.state.emoji}
        className='new-card-form__form-select' >
          <option value=''>Add Emoji</option>
          <option value={EMOJI_LIST[0]}>None</option>
          <option value={EMOJI_LIST[1]}>😍</option>
          <option value={EMOJI_LIST[2]}>🍺</option>
          <option value={EMOJI_LIST[3]}>👏</option>
          <option value={EMOJI_LIST[4]}>💖</option>
          <option value={EMOJI_LIST[5]}>😻</option>
          <option value={EMOJI_LIST[6]}>🐶</option>
        </select>
        <input type='submit' value='Add Card' className='new-card-form__form-button' />
        </div>

      </form>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};


export default NewCardForm;
