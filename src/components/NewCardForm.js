import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  static propTypes = {
    //addCardCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      text: "",
      emoji: ""
    };
  }

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addCardCallback(this.state);

    this.setState({
      text: "",
      emoji: ""
    });
  }



  render() {
    return (
      <form className="new-card-form" onSubmit={this.onFormSubmit}>
        <p className="new-card-form__header">Post a thing</p>
        <div>
          <label className="new-card-form__form-label"  htmlFor="text">Text</label>
          <input className="new-card-form__form-textarea" type="text"
            name="text"
            value={this.state.text}
            onChange={this.onInputChange}/>
        </div>
        <div>
          <label className="new-card-form__form-label" htmlFor="emoji">Emoji</label>
          <input className="new-card-form__form-select" type="text"
            name="emoji"
            value={this.state.emoji}
            onChange={this.onInputChange}/>
        </div>
        <div><input className="new-card-form__form-button" type="submit"/></div>
      </form>
    );
  }
}

export default NewCardForm;
