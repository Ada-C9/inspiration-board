import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    };
  }

  onInputChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    let updatedInput= {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
    // console.log(this.state);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addCardCallback(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="text">Message:</label>
        <input type="text" name="text" value={this.state.text} onChange={this.onInputChange}/>
        <label htmlFor="emoji">Emoji:</label>
        <input type="text" name="emoji" value={this.state.emoji} onChange={this.onInputChange}/>
        <input type="submit"/>
      </form>
    );
  }

}

export default NewCardForm;
