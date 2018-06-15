import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      text: '',
      emoji: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = [fieldValue];
    this.setState(updateState);
  }

  // valid = () => {
  //   return this.state.name.length > 0 && this.state.age > 0
  // }

  clearForm = () => {
    this.setState({
      id: 0,
      text: '',
      emoji: ''
    });
  }
  onFormSubmit = (event) => {
    event.preventDefault();

      // this needs to be created in the card itself
    this.props.addCard(this.state)
    this.clearForm()
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="new-card-form">
        <div>
          <label htmlFor="text">Text: </label>
          <input
           name="text"
           value={this.state.text}
           onChange={this.onFieldChange}
           type="text" />
        </div>
        <div>
          <label htmlFor="emoji">Emoji: </label>
          <input
          name="age"
          value={this.state.emoji}
          onChange={this.onFieldChange}
          type="number" />
        </div>

        <input
          className="button success"
          type="submit"
          value="Inspire"
        />
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
