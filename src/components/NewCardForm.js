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
    // let updatedInput = {};
    // updatedInput["text"] = event.target.value;

    this.setState({text: event.target.value})
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

  // {EMOJI_LIST.map(function(emoji, index){
  //    return <option key={ index } >{emoji.getUnicode(emoji)}</option>
  // })}

  // <option>{emoji.getUnicode("heart_eyes_cat")}</option>

  render() {
    const emojiList = EMOJI_LIST.map((emojiWord, index) => {
     return <option key={index} value= {emojiWord}>{ emoji.getUnicode(emojiWord)}</option> })

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

        <div>
          <label
          htmlFor="emoji">Emoji</label>
          <select
          name="emoji"
          value={this.state.emoji}
          onChange={this.onInputChange}
          className="new-card-form_form-select">
            {emojiList}
          </select>
        </div>
        <br></br>
        <div><input type="submit"/>
        </div>
        <br></br>
      </form>
    );
  }
}

export default NewCardForm;
