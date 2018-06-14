import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      emoji: '',
    }
  }
  onFieldChange = (event) => {
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
    this.props.addCardCallback(this.state);
    this.clearForm();
  }

  render() {
    let options = EMOJI_LIST.map((e) => {
      return (<option key={e} value={e}>{emoji.getUnicode(e)}</option>);
    });

    return (
      <form onSubmit={this.onFormSubmit}>
      <div>
        <label htmlFor="text">Text: </label>
        <input
          name="text"
          value={this.state.text}
          onChange={this.onFieldChange}
          type="text"
          />
      </div>
        <div>
          <label htmlFor="emoji">Emoji: </label>
          <select
            name="emoji"
            value={this.state.emoji}
            onChange={this.onFieldChange}
            type="text"
            >
            {options}
          </select>
        </div>
        <input type="submit" value="Add Card" />
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
