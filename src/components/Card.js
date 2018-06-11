import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  getEmoji = () => {
    if (this.props.emoji) {
      return (emoji.getUnicode(this.props.emoji));
    }
  }
  render() {
    return (
      <div className="card">
      <p>{this.props.text}</p>
      {this.getEmoji()}
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,

};

export default Card;
