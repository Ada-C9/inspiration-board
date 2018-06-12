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
      emoji:  '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.text;
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
      <form onSubmit={this.onFormSubmit} >
        <div>
          <label hmtlFor="text">Text: </label>
          <input
            name="text"
            value={this.state.text}
            onChange={this.onFieldChange}
            type="text"/>
        </div>
        <div>
          <label hmtlFor="emoji">Emoji: </label>
          <input
            name="emoji"
            value={this.state.emoji}
            onChange={this.onFieldChange}
            type="text"/>
        </div>
        <input type="submit" value="Add a Note" />
      </form>
    );
  }

}

NewCardForm.propTypes = {
  addCardCallBack: PropTypes.func.isRequired,
}

export default NewCardForm;
