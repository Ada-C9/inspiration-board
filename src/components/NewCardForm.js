import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

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

    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }


  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addCardCallback(this.state);
    this.clearForm();
  }

  MakeItem = function(X) {
      return <option>{X}</option>;
    };

  render() {
    return (
      <section className="new-card-form">
        <h3 className="new-card-form__header">Add a Card</h3>
        <form className="new-card-form__form" onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="text" className="new-card-form__form-label">Text: </label>
            <input
              className="new-card-form__form-textarea"
              name="text"
              value={this.state.text}
              type="text"
              onChange = {this.onFieldChange}/>
          </div>
          <div>
            <label htmlFor="emoji" className="new-card-form__form-label">Emoji: </label>
            <select className="new-card-form__form-select" name="emoji" onChange={this.onFieldChange}>
              {EMOJI_LIST.map( (emoji, index) =>
                <option key={index} > {emoji} </option>
              )};
            </select>
          </div>
          <input type="submit" value="Add Card" className="new-card-form__form-button" />
        </form>
      </section>
    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
