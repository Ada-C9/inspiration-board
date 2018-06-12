import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(){
    super();

    this.state = {
      text: "",
      emoji: ""
    }
  }

  onInputChange = (event) => {
    event.preventDefault();
    console.log(event);

    let updatedMessage = {};
      updatedMessage[event.target.text] = event.target.value,
      updatedMessage[event.target.emoji] = event.target.value
      this.setState(updatedMessage);

  }

  render(){
    return (
    <form onFormSubmit={this.onSubmitForm} className="new-card-form new-card-form__form" >
      <div>
          <label htmlFor="text" className="new-card-form__form-label">Message</label>
          <input type="text"
          name="text"
          value={this.state.text}
          onChange={this.onInputChange}
          className="new-card-form__form-textarea"
          />
      </div>
      <div>
          <label htmlFor="emoji" className="new-card-form__form-label">Emoji</label>
          <input type="emoji"
          name="emoji"
          value={this.state.text}
          onChange={this.onInputChange}
          className="new-card-form__form-select"
          />
        </div>
        <div >
        <input type="submit" className="new-card-form__form-button"/>
        </div>


    </form>
  )
  }

}

export default NewCardForm;
