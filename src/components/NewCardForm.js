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

    const emojiPicker = EMOJI_LIST.map((emoj, index) => {
      return (
        <option key={index} value={emoj}>{emoj}</option>
      )
    });

    return (
      <section>
        <h3>Add An Edifying Post-It of Your Very Own: </h3>
        <form onSubmit={this.onFormSubmit} >
          <div>
            <label>Concoct a Heart-Stirring Message:
              <textarea name="text" value={this.state.text} type="text" id="text" onChange={this.onFieldChange} />
            </label>
          </div>
          <div>
            <label>
              Choose The Emoji That Best Represents the Current State of Your Soul:
              <select name="emoji" value={this.state.emoji} type="text" id="emoji" onChange={this.onFieldChange}>
                {emojiPicker}
              </select>
            </label>
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
