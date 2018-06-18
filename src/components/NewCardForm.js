import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired,
    text: PropTypes.string
  };
  // initial state of form input field
  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    };
  }

  // event handler fxn is an arrow fxn that takes an event
  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value
    this.setState( updatedInput );
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    // here we connect the collection of cards on the Board and the form itself via callback and callback fxn
    this.props.addCardCallback({
      card: {
        text: this.state.text,
        emoji: this.state.emoji
      }
    });
    // want to clear out form after submitting update, so reset state to default
    this.setState({
      text: '',
      emoji: ''
    });
  }

  render() {
    const list = EMOJI_LIST.map((name, index) => {
      return <option
      key={index}
      value={name} >
      {emoji.getUnicode(name)}
      </option>
    })
    return (
      <article className="new-card-form">
        <h2 className="new-card-form__header">Create New Card</h2>
          <form onSubmit={this.onFormSubmit} className="new-card-form__form">
            <div>
              <label className="new-card-form__form-label"htmlFor="text">Words: </label>

              <input type="text"
              name="text"
              value={this.state.text}
              onChange={this.onInputChange} />
            </div>

            <div>
              <label className="new-card-form__form-label"htmlFor="emoji">Emoji:
                <select type="emoji"
                name="emoji"
                value={this.state.emoji}
                onChange={this.onInputChange}>

                { list }

                </select>
              </label>
            </div>

            <div>
            <input className="new-card-form__form-button" type="submit"/>
            </div>
        </form>
      </article>
    );
  }
}

export default NewCardForm;
