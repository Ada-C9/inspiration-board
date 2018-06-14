import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog",
 "star_struck", "exploding_head", "thinking", "rofl", "clinking_glasses"]



class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func
  };

  constructor() {
    super();

    this.state = {

        text: '',
        emoji: '',

    };
  }



  onInputChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value
     this.setState( updatedInput )
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state, 'Just Good Vibes');
    console.log(this.state);

    this.setState({

        text: '',
        emoji: '',

    });
  }





  render () {
    const list = EMOJI_LIST.map((name, index) => {
      return <option key={index} value={name} >{emoji.getUnicode(name)}</option>
    })
    return (
      <section className="new-card-form">
      <h1 className="new-card-form__header">Create a card </h1>
      <form onSubmit={this.onFormSubmit}  className="new-card-form__form">
        <div>
          <label htmlFor="text" className="new-card-form__form-label">Text  </label>
          <input
          type="text"
          name="text"
          placeholder = "Just Good Vibes"
          value={this.state.text}
          onChange={this.onInputChange}
          className="new-card-form__form-textarea"/>
        </div>

        <div >
          <label htmlFor="emoji" className="new-card-form__form-label">Emoji </label>

          <select
          type="text"
          name="emoji"
          value={this.state.emoji}
          onChange={this.onInputChange}
          className="new-card-form__form-select">
          {list}
          </select>
        </div>

        <div><input type="submit" className="new-card-form__form-button"/> </div>
      </form>
      </section>
    )
  }

}

export default NewCardForm;
