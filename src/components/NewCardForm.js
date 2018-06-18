import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import axios from 'axios/index';
import Card from './Card';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"];
String.prototype.toEmoji = function toEmoji() { return emoji.getUnicode(this)};

class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardMessage: '',
      cardEmoji: ''
    };
  }

  // onMessageChange = (value) => {
  //   const cardMessage = value;
  //   this.setState({ cardMessage, });
  // };
  //
  // onEmojiSelect = (value) => {
  //   const cardEmoji = value;
  //   this.setState({ cardEmoji, });
  // };

  onFieldChange = (event) => {
    let updatedField = {};
    console.log(event.target.name);
    updatedField[event.target.name] = event.target.value;
    this.setState(updatedField);
  };

  createCard = (event) => {
    event.preventDefault();
    const newCard = {
      text: this.state.cardMessage,
      emoji: this.state.cardEmoji,
    };
    this.props.addCardCallback(newCard);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      cardMessage: '',
      cardEmoji: '',
    });
  };

  SelectionOption = (optionValue) => {
    return <option value={optionValue}>{optionValue.toEmoji()}</option>;
  };

  render() {
    const emojiSelectOptions = EMOJI_LIST.map((optionValue) => this.SelectionOption(optionValue));

    return (
      <form className="card"
            onSubmit={ this.createCard }>
          <label htmlFor="GET-name"/>
          <textarea id="GET-name"
                    value={this.state.cardMessage}
                    name="cardMessage"
                    onChange={ this.onFieldChange }>
          </textarea>
        <select value={this.state.cardEmoji}
                name="cardEmoji"
                onChange={ this.onFieldChange }>
           {emojiSelectOptions}
        </select>
        <input type="submit" value="submit" />
        </form>

    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};


export default NewCardForm;

