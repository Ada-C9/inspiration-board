import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import tempData from '../data/card-data.json';

import './Card.css';

function convertToemoji(anEmoji){
  return emoji.getUnicode(anEmoji)
}

class Card extends Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.text}</p>
        <p>{convertToemoji(this.props.emoji)}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text:PropTypes.string.isRequired,
  emoji:PropTypes.string.isRequired,
};

export default Card;
