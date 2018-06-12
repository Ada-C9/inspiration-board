import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
static propTypes = {
  addCardCallback: PropTypes.func.isRequired
}

  constructor(){
    super();

    this.state = {
      text: "",
      emoji: ""
    };
  }



  onInputChange = (event) => {
    let updatedMessage = {};
    updatedMessage[event.target.name] = event.target.value;
    this.setState(updatedMessage);
  }


  onFormSubmit = (event) => {
  event.preventDefault();
  console.log(this.state);
  this.props.addCardCallback(this.state);
//clearing the from after it is submited
this.setState({
  text: "",
  emoji: ""
});

}

  render(){

    let emojiOptions = EMOJI_LIST.map((my_emoji, key) => {
      return <option key ={key} value={my_emoji} >{emoji.getUnicode(my_emoji)}</option>
    })

    return (
      <form onSubmit={this.onFormSubmit} className="new-card-form new-card-form__form" >
        <div>
          <label htmlFor="text" className="new-card-form__form-label">Message</label>
          <input type="text"
          name="text"
          value={this.state.text}
          onChange={this.onInputChange}
          className="new-card-form__form-textarea"
          />
        </div>
        <div>
          <label htmlFor="emoji" className="new-card-form__form-label">Emoji</label>
          <select type="emoji"
          name="emoji"
          value={this.state.emoji}
          onChange={this.onInputChange}
          className="new-card-form__form-select">
              {emojiOptions}
          </select>
        </div>
        <div >
          <input type="submit" className="new-card-form__form-button"/>
        </div>


      </form>
    )
  }

}

export default NewCardForm;
