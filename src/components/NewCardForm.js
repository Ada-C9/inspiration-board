import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class  NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func
  }
  constructor(){
    super();
    this.state = {
      text: '',
      emoji: '',
    }
  }
  onInputChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    let updatedInput = {};
    updatedInput[key]= value;
    this.setState(updatedInput);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addCardCallback(this.state);

    this.setState({text:'', emoji: ''});
  };

  render() {
    return (
      <section className="new-card-form">
        <h2 className="new-card-form__header">Create a new card</h2>
        <form className="new-card-form__form" onSubmit={this.onFormSubmit} >

          <label className="new-card-form__for-label" htmlFor="text">Enter Text</label>
          <input
            type="text"
            name="text"
            onChange={this.onInputChange}
          />

          <label className="new-card-form__for-label" htmlFor="text">Emoji</label>
          <input
            type="text"
            name="emoji"
            onChange={this.onInputChange}
          />

          <input className="new-card-form__form-button"
            type="submit"/>
        </form>
      </section>

    )
  }
}

export default NewCardForm;
