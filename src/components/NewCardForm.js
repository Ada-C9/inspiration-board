import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import axios from 'axios/index';
import Card from './Card';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"];
String.prototype.toEmoji = function toEmoji() { return emoji.getUnicode(this);


class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardMessage: "",
      cardEmoji: ""
    };
  }

  // onFieldChange = (index) => {
  //   const words = this.state.words;
  //   words[index].value = value;
  //   this.setState({ words, });
  // };

  onEmojiSelect = (value) => {
    this.setState({ words, });
  };


  createCard = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.props.addCardCallback(event);
  };

  render() {

    return (
      <form className="card"
            onSubmit={(event) => {
              // event.preventDefault();
              this.createCard(event) }}>
          <label htmlFor="GET-name"/>
          <textarea id="GET-name" type="text" name="name">
          </textarea>
        <select value={this.state.value}
                onChange={(event) => { this.onEmojiSelect(event.target.value) }}>
          <option value="heart_eyes">😍</option>
          <option value="beer">🍺</option>
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