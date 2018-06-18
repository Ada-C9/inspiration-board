import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js'
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  constructor(){
    super();
    this.state ={
      text: '',
      emoji: ''
    };
  }

populateDropdown = () =>{
    const popItems = EMOJI_LIST.map((anEmoji) =>{
      return(
      <option key={anEmoji} value={anEmoji}>{emoji.getUnicode(anEmoji)}</option>
      )
    })
    return popItems
  }

  onFieldChange = (event) =>{
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      const updateState = {};
      updateState[fieldName] = fieldValue;
      this.setState(updateState);
  }

  clearForm = () => {
  this.setState({
    text: '',
    emoji: '',
  });
}


onFormSubmit = (event) => {
  event.preventDefault();
  this.props.addCardcallBack(this.state)
  this.clearForm();
}


  render(){
    return(
      <form className="new-card-form"  onSubmit={this.onFormSubmit}>
        <div className ="new-card-form__form">
          <label className="new-card-form__form-label" htmlFor="text">Text: </label>
          <input className="new-card-form__form-textarea"
            name="text"
            value={this.state.text}
            onChange={this.onFieldChange}
            type="text"
                        />
        </div>
        <div className="new-card-form__form">
        <select name="emoji" value={this.state.emoji} onChange={this.onFieldChange}>
          {this.populateDropdown()}
        </select>
        </div>
          <input type="submit" value="Add Message" />
      </form>
    )
  }

}

NewCardForm.propTypes = {
  addCardcallBack: PropTypes.func.isRequired,
}
export default NewCardForm;
