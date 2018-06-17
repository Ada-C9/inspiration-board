import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

// const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

let EMOJI_LIST = ['']


 emoji.names.slice(0,599).forEach((emoji) => {
   EMOJI_LIST.push(emoji);
 })

emoji.names.slice(900,999).forEach((emoji) => {
  EMOJI_LIST.push(emoji);
})

export default class NewCardForm extends Component {

  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      emoji: 'heart_eyes',
      text: 'Type here to add a new post-it!'
    }
  }
  myCallback = (event) => {
    console.log(event);
  }

  onInputChange = (event) => {

    let updatedInput = Object.assign({}, this.state);

    updatedInput[event.target.name] = event.target.value;

    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addCardCallback(this.state)
    let updateState = Object.assign({}, this.state);

    updateState['emoji'] = '';
    updateState['text'] = '';

    this.setState(updateState);
  }

  render() {
    const selectEmoji = EMOJI_LIST.map((emoji1, index) => {
      return <option key={index }value={emoji1} className='card__content-emoji'>{emoji.getUnicode(emoji1)}</option>
    })

    return (

      <article className="new-card">
      <section className="new-card__content">
          <select className="new-card-form__form-select" name="emoji" defaultValue={this.state.emoji} onChange={this.onInputChange}>
            {selectEmoji}
          </select>
            <textarea
              rows="5"
              type="text"
              className="new-card__content-text"
              name="text" value={this.state.text} onChange={this.onInputChange} />
            <button className="new-card-form__form-button" onClick={this.onFormSubmit}>Add Card</button>
            </section>
          </article>

      )
    }
  }
