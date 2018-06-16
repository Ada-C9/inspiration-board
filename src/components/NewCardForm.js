import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';


class NewCardForm extends Component {
  constructor(props) {
    super(props);

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
      emoji: ''
    });
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCard(this.state)
    this.clearForm()
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="new-card-form">
        <div className="new-card-form__form">
          <label className="new-card-form__form-label" htmlFor="text">Text: </label>
          <input
            className="new-card-form__form-textarea"
           name="text"
           value={this.state.text}
           onChange={this.onFieldChange}
           type="text" id="text_form"/>
        </div>
        <div className="new-card-form__form">
          <label htmlFor="emoji">Emoji: </label>
          <input
          name="emoji"
          value={this.state.emoji}
          onChange={this.onFieldChange}
          type="text"
          className="new-card-form__form-textarea" id="emoji_form"/>
        </div>

        <input
          className="new-card-form__form-button"
          type="submit"
          value="Inspire"
        />
      </form>
    );
  }
}

NewCardForm.propTypes = {
  // why doesn't it work with the callback func proptype for addCard...it is not set to required but breaks my removeCard functionality
}

export default NewCardForm;
