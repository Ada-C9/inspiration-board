import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      emoji: ''
    }
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;

    const val = event.target.value;
    // const fieldValue = fieldName === 'age' ? parseInt(val, 10) : val;

    const updateState = {};
    updateState[fieldName] = val;
    this.setState(updateState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state);
  }

  render(){
    return (
      <div className = "new-card-form">
        <h3 className = "new-card-form__header" >Add New Card</h3>
        <form
          className = "new-card-form__form"
          onSubmit = { this.onFormSubmit}>
          <div>
            <label
              className = "new-card-form__form-label"
              htmlFor = 'text'> Name:
            </label>
            <input name = 'text' value = { this.state.text } type = 'text'
              onChange = { this.onFieldChange }
            />
          </div>
          <div>
            <label
              className = "new-card-form__form-label"
              htmlFor = 'emoji'> Emoji: 
            </label>
            <input name = 'emoji' value = { this.state.emoji } type = 'text'
              onChange = { this.onFieldChange }
            />
          </div>
          <input className = "new-card-form__form-button" type = 'submit' value = 'Add Card'/>
        </form>
      </div>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;
