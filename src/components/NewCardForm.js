import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

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
    return this.state.text.length > 0 ||
           this.state.emoji.length > 0;
  }

  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.valid()) {
      this.props.addCardCallback(this.state);
      this.clearForm();
    }
  }

  render() {
    return (
      <section>
        <h3>Add An Edifying Post-It of Your Very Own: </h3>
        <form onSubmit={this.onFormSubmit} >
          <div>
            <label htmlFor="text">Inspiring Message: </label>
            <input
              name="text"
              value={this.state.text}
              onChange={this.onFieldChange}
              type="text"
              id="text"
              />
          </div>
          <div>
            <label htmlFor="emoji">Desired Emoji: </label>
            <input
              name="emoji"
              value={this.state.emoji}
              onChange={this.onFieldChange}
              type="text"
              id="emoji"
              />
          </div>
          <input type="submit" value="Inspire!" />
        </form>
      </section>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
