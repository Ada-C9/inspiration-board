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
      <div className="card">
        <p className="content-text">
          {this.props.text}</p>
        <p className="content-emoji"> {getEmoji(this.props.emoji)}</p>
        <button>Delete</button>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
