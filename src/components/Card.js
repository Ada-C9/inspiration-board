import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {

    const getEmoji = (props) => {
      if (props) {
        return emoji.getUnicode(props)
      }
    }
    return (
      <div className="card card__content">
        <p className="card__content-text">
          {this.props.text}</p>
        <p className="card__content-emoji"> {getEmoji(this.props.emoji)}</p>
        <button className="card__delete">Delete</button>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
