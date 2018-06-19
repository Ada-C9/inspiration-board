import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

// console.log(emoji.getName("😲"));


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
    console.log(this.state);
    this.props.addCardCallback(this.state, 'it will be alright!');

    this.setState({
      text: '',
      emoji: '',
    });
  }

  // buildInput(key, text) {
  //   return (
  //     <div>
  //       <label htmlFor={key}>{text}</label>
  //       <input type="text"
  //         name={key}
  //         value={this.state[key]}
  //         onChange={this.onInputChange}/>
  //     </div>
  //   );
  // }


  render() {

    const emojiList = EMOJI_LIST.map((name, index) => {
      return <option key={index} value={name}>{emoji.getUnicode(name)}</option>
    })
    console.log(emojiList);

    return (
      <section className="new-card-form">
      <form onSubmit={this.onFormSubmit} className="new-card-form__form">
        <div>
          <label htmlFor="text" className="new-card-form__form-label">Message </label>
          <input
           type="text"
           name="text"
           value={this.state.text} onChange={this.onInputChange}
           className="new-card-form__form-textarea"/>
        </div>
        <div>
          <label htmlFor="text" className="new-card-form__form-label">Emoji </label>
            <select
             type="text"
             name="emoji"
             value={this.state.emoji}
             onChange={this.onInputChange}
             className="new-card-form__form-select">
             { emojiList }
            </select>
        </div>
        <div>
          <input
           type="submit"
           value="Make a card!"
           className="new-card-form__form-button"/>
        </div>
      </form>
      </section>
    )
  }
}

export default NewCardForm;
