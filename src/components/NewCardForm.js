import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(){
    super();

    this.state = {
      text: "",
      emoji: ""
    }
  }

  render(){
    return (
    <form>
    <div>
        <label htmlFor="text">Message</label>
        <input type="text"
        name="text"
        value={this.state.text}
        />
      </div>
      <div>
          <label htmlFor="emoji">Emoji</label>
          <input type="emoji"
          name="emoji"
          value={this.state.text}
          />
        </div>


    </form>
  )
  }

}

export default NewCardForm;
