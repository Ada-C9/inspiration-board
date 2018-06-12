import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <ul>
        <li>{this.props.id}</li>
        <li>{this.props.text}</li>
        <li>{emoji.getUnicode(`${this.props.emoji}`)}</li>
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string

};

export default Card;
