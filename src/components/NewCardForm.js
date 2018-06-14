import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/Jamila_Cornick/cards'

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      emoji: '',
    }
  }

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
    event.target.name
    event.target.value
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.props.addCardCallback(this.state)

  this.setState({
    text: '',
    emoji: '',
    });

  }
  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
      <div>
      <label htmlFor="text">text</label>
      <input type="text"
      name="text"
      value={this.state.text}
      onChange={this.onInputChange}/>
      </div>

      <div>
      <label htmlFor="emoji">emoji</label>
      <input type="text"
      name="emoji"
      value={this.state.emoji}
      onChange={this.onInputChange}/>
      </div>



      <div> <input type="submit"/> </div>


      </form>
    );
  }

}

export default NewCardForm;
