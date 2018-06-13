import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  };
  // initial state of form input field
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  // event handler fxn is an arrow fxn that takes an event
  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value
    this.setState( updatedInput );
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // here we connect the collection of cards on the Board and the form itself via callback and callback fxn
    this.props.addCardCallback(this.state);
    // want to clear out form after submitting update, so reset state to default
    this.setState({
      text: ''
    });
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="new-card-form__form">
      <div>
      <label htmlFor="text">Words: </label>
      <input type="text"
      name="text"
      value={this.state.text}
      onChange={this.onInputChange} />
      </div>
      <div><input type="submit"/></div>
      </form>
    );
  }
}

export default NewCardForm;
