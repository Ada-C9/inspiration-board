import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      emoji: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    console.log(fieldName)
    console.log(fieldValue)
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }


  onFormSubmit = (event) => {
    event.preventDefault();

      this.props.addCardCallBack(this.state);
      this.clearForm();
  }

  clearForm=()=>{
      this.setState({
        text: '',
        emoji: '',
      });
    }

    renderEmojiList = () => {
      // console.log(`EMOJI_LIST = ${EMOJI_LIST}`)
      const emojiList = EMOJI_LIST.map((element, index) => {
        return (
          <option  key={index}>{emoji.getUnicode(element)}</option>
        );
      });
      return emojiList;
    }


  render() {
    return (
      <section className="new-card-form">

        <header className="new-card-form__header">Add a new card! </header>

        <form className="new-card-form__form"onSubmit={this.onFormSubmit}>

          <div>
            <label className="new-card-form__form-label" htmlFor="text">Text: </label>
            <input
            className="new-card-form__form-textarea"
            name="text"
            value={this.state.text}
            type="text"
            onChange= {this.onFieldChange}
            />
          </div>

          <div>
            <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
            <select
            name="emoji"
            type="text"
            value={this.state.emoji}
            className="new-card-form__form-select"
            onChange={this.onFieldChange}>
            {this.renderEmojiList()}
          </select>
          </div>


          <input
          className="new-card-form__form-button"
          type="submit" value="Ada Card"
          />

        </form>
      </section>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallBack: PropTypes.func,
};

export default NewCardForm;
