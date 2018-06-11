import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string
  }
  render() {

    let convertEmoji =  emoji.getUnicode(this.props.emoji || "100");

    return (

      <div className="card">
        <strong className="card__content card__content-text" >{this.props.text}</strong>
        <p className="card__content card__content-emoji">{convertEmoji}</p>
        <button className="card__content card__delete">Take this note!</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
