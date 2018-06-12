import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const emojis = this.props.emoji

    return (
      <div className="card">
      Card

      {this.props.text}
      {emoji.getUnicode(`${emojis}`)}
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
