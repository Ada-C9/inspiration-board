import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


const EMOJI_LIST = ["", "heart_eyes", "grin", "joy", "star_struck", "nerd_face", "kissing_heart",
"grinning", "thinking", "hugs", "grimacing", "beer", "clap", "sparkling_heart", "heart_eyes_cat",
"joy_cat", "smile_cat", "kissing_cat", "star", "clinking_glasses", "dog", "octopus", "woman_technologist"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      text: '',
      emoji: ''
    };
  }

  onInputChange = (event) => {
    console.log('form submitted');

    let updatedInput = {};

    updatedInput[event.target.name] = event.target.value;

    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
    this.props.addCardCallback(this.state);

    this.setState({
      text: '',
      emoji: ''
    });
  }


  render() {

    const emojiList = EMOJI_LIST.map((name, index) => {
      return <option key={index} value={name}>{emoji.getUnicode(name)}</option>
    });

    return (
      <section className="new-card-form">
      <h2 className="new-card-form__header">Create new card</h2>
      <form onSubmit={this.onFormSubmit} className="new-card-form__form">

        <div>
          <label htmlFor="text" className="new-card-form__form-label">Text:</label>
          <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.onInputChange}
          className="new-card-form__form-textarea"
          />
        </div>

        <div>
          <label htmlFor="emoji" className="new-card-form__form-label">Emoji:</label>
          <select
          type="text"
          name="emoji"
          value={this.state.emoji}
          onChange={this.onInputChange}
          className="new-card-form__form-select">
            {emojiList}
          </select>
        </div>

        <div><input type="submit" value="Submit" className="new-card-form__form-button"/></div>
      </form>
      </section>
    )
  }

}

export default NewCardForm;
