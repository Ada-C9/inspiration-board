import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';
import '../styles/NewCardForm.css';

// const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      emoji: '',
    }
  }

  onInputChange = (event) => {
    let updatedState = {};
    updatedState[event.target.name] = event.target.value;
    this.setState(updatedState);
    console.log(this.state);
  }

  onFormSubmit = (event) => {
    event.preventDefault(); // prevent refresh

    this.props.addCallBack(this.state)
    this.setState({ // clears form
      text: '',
      emoji: '',
    })

  }

  render(){
    return(
      <section>
      <form onSubmit={this.onFormSubmit} className="new-card-form">

        <h3 className="new-card-form__header">Add a card</h3>

        <div>
        <label htmlFor="content">Card Content</label>
        <input onChange={this.onInputChange} type="text" name="text" value={this.state.text} />
        </div>

        <div>
        <label htmlFor="emoji">Emoji</label>
        <input onChange={this.onInputChange} type="text" name="emoji" value={this.state.emoji} />
        </div>

        <div>
        <button type="submit">Add!</button>
        </div>
      </form>
      </section>
    );
  }
}


export default NewCardForm;
