import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    id: PropTypes.number.isRequired,
    deleteCardCallback: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  onButtonClick = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.id);
    this.props.deleteCardCallback(event.target.id, event.target.value)
  }

  render() {

    let convertEmoji =  emoji.getUnicode(this.props.emoji || "100");

    return (

      <div className="card">
        <strong className="card__content card__content-text" >{this.props.text}</strong>
        <p className="card__content card__content-emoji">{convertEmoji}</p>
        <button id={this.props.id} className="card__content card__delete" onClick={this.onButtonClick} value={this.props.index}>Take this note!</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
