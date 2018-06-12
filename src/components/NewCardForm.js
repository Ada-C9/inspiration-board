import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]



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
    this.props.addCardCallback(this.state);
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
      <h1 className="new-card-form__header">Add a card </h1>
      <form onSubmit={this.onFormSubmit}  className="new-card-form__form">
        <div>
          <label htmlFor="text">Text </label>
          <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.onInputChange}
          />
        </div>

        <div >
          <label htmlFor="emoji">Emoji
          <select
          type="text"
          name="emoji"
          value={this.state.emoji}
          onChange={this.onInputChange}
          >
          {list}
          </select>
          </label>
        </div>

        <div className=""><input type="submit"/> </div>
      </form>
      </section>
    )
  }

}

export default NewCardForm;
