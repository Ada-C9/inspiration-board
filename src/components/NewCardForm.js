import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      card:{
        text: '',
        emoji: '',

      }
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
      <form onSubmit={this.onFormSubmit} className="new-card-form new-card-form__form">
      <div>
      <label htmlFor="text" className="new-card-form__form-label">text</label>
      <input type="text"
      name="text"
      value={this.state.value}
      onChange={this.onInputChange}/>
      </div>

      <div>
      <label htmlFor="emoji" className="new-card-form__form-label"></label>
      <input type="text"
      name="emoji"
      value={this.state.value}
      onChange={this.onInputChange}/>
      </div>



      <div> <input type="submit" className="new-card-form__form-button"/> </div>


      </form>
    );
  }

}

export default NewCardForm;
