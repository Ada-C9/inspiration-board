import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "joy"]

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      text:'',
      emoji: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  valid = () => {
    return this.state.text.length > 0;
  }

  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
     if (this.valid()) {
       this.props.addCardCallBack(this.state)
       this.clearForm()

     }
  }

  render() {
    return(
      <div className="new-card-form">
      <p className="new-card-form__header">Create new card:</p>
      <form onSubmit={this.onFormSubmit} className="new-card-form__form" >
        <div>
          <label hmtlfor="text" className="new-card-form__form-label">Text: </label>
          <input
            name="text"
            value={this.state.text}
            onChange={this.onFieldChange}
            type="text"
            className="new-card-form__form-textarea"/>
        </div>
        <div>
          <label hmtlfor="emoji" className="new-card-form__form-label" >Emoji: </label>
          <input
            name="emoji"
            value={this.state.emoji}
            onChange={this.onFieldChange}
            type="text"
            className="new-card-form__form-textarea"/>
        </div>
        <input type="submit" value="Add Card" className="new-card-form__form-button" />
      </form>
      </div>
    );
  }

}

NewCardForm.propTypes = {
  addCardCallBack: PropTypes.func.isRequired,
}

export default NewCardForm;
