import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"];
String.prototype.toEmoji = function toEmoji() { return emoji.getUnicode(this)};

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: ''
    };
  }

  onFieldChange = (event) => {
    let updatedField = {};
    updatedField[event.target.name] = event.target.value;
    this.setState(updatedField);
  };

  createCard = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      text: '',
      emoji: ''
    });
  };

  SelectionOption = (optionValue) => {
    return <option value={optionValue} key={optionValue}>{optionValue.toEmoji()}</option>;
  };

  render() {
    const emojiSelectOptions = EMOJI_LIST.map((optionValue) => this.SelectionOption(optionValue));

    return (
      <form className="card"
            onSubmit={ this.createCard }>
        <section>
          <label htmlFor="GET-name"/>
          <textarea id="GET-name"
                    value={this.state.text}
                    name="text"
                    onChange={ this.onFieldChange }>
          </textarea>


        <select value={this.state.emoji}
                name="emoji"
                onChange={ this.onFieldChange }>
           {emojiSelectOptions}
        </select>
        <input type="submit" value="submit" />
        </section>
        </form>

    )
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};


export default NewCardForm;

