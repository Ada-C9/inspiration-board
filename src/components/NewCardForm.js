import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      text: '',
      emoji: ''
    };
    console.log(this.state);
  }

  onInputChange = (event) => {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // const newCard = {
    //   card: this.state
    // };
    // this.props.addCardCallback(newCard);
    this.props.addCardCallback(this.state);
    this.setState({
      id: 1,
      text: '',
      emoji: ''
    });
  }

  render() {
    const emoji_options = EMOJI_LIST.map((emoji, index) => {
      return <option key={index} >
        { emoji }
      </option>;
    });
    return (
      <form className="new-card-form new-card-form__form" onSubmit={this.onFormSubmit}>
      <h3 className="new-card-form__header">Add a new inspirational note to this board.</h3>
        <div>
          <label htmlFor="text"
          className="new-card-form__form-label" >Message</label>
          <textarea
            type="text"
            name="text"
            value={this.state.text}
            onChange={ this.onInputChange }
            className="new-card-form__form-textarea"
            ></textarea>
        </div>
        <div>
          <label htmlFor="emoji" className="new-card-form__form-label">Emoji (optional)</label>
          <select
            name="emoji"
            value={this.state.emoji}
            onChange={ this.onInputChange }
            className="new-card-form__form-select"
          >
            { emoji_options }
          </select>
        </div>
        <div>
          <input type="submit" className="new-card-form__form-button" />
        </div>
      </form>
    );
  }
}

export default NewCardForm;
