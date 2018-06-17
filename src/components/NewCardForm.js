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
    };
  }

  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {

    event.preventDefault();
    this.props.addCardCallback(this.state.text, this.state.emoji);

    this.setState({
      text: '',
      emoji: ''
    });
  }


  render() {
    const options = EMOJI_LIST.map((emoji_text) => {
      return <option value={emoji_text}>{ emoji.getUnicode(emoji_text) }</option>;
    })

    return (
      <section className="new-card-form">
        <h2 className="new-card-form__header">Add a new card</h2>
        <form className="new-card-form__form" onSubmit={this.onFormSubmit}>
          <div>
            <label className="new-card-form__form-label" htmlFor='text'>Text: </label>
            <input className="new-card-form__form-textarea" type='text'
              name='text'
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label className="new-card-form__form-label" htmlFor='emoji'>Emoji:
            <select className="new-card-form__form-select" name='emoji' value={this.state.emoji} onChange={this.onInputChange}>
              { options }
            </select>
            </label>
          </div>
          <div>
            <input className="new-card-form__form-button" type="submit"/>
          </div>
        </form>
      </section>
    );
  }
}

export default NewCardForm;
