import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {


  render() {
    console.log('Rendering a card')
    const displayEmoji = require("emoji-dictionary");
    return (
      <div className="card">
        <p><strong>Message:</strong>{this.props.text}</p>
        <p>{this.props.emoji}</p>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  enoji: PropTypes.string,
};

export default Card;
