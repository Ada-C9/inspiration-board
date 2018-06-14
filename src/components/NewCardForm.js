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
    let updatedInput = {};
    updatedInput[event.target.text] = event.target.value;

    this.setState(updatedInput)
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
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label
          htmlFor="text">Message</label>
          <input type="text"
          id="text"
          value={this.state.text}
          onChange={this.onInputChange}/>
        </div>
        <div><input type="submit"/>
        </div>
      </form>
    );
  }
}

export default NewCardForm;
