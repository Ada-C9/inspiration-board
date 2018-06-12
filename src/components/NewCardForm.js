import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor () {
    super();
    this.state = {
      text: '',
      emoji: '',
    }
  }

  onFieldChange = (event) => {
    const fieldName =  event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.text.length > 0) {
      this.props.addNewCardCallback(this.state)
      this.clearForm();
    }
  }


  render () {
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
        <label htmlFor='text'>Note: </label>
        <input name='text' value={this.state.text} type='text' onChange={this.onFieldChange}/>
        </div>
        <div>
        <label htmlFor='emoji'>Emoji: </label>
        <input name='emoji' value={this.state.emoji} type='text' onChange={this.onFieldChange}/>
        </div>
        <input type='submit' value='Add a Note' />
      </form>
    );
  }

}

NewCardForm.propTypes = {
  addNewCardCallback: PropTypes.func.isRequired,
}

export default NewCardForm;
