import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {

    const getEmoji = (props) => {
      if (props) {
        return emoji.getUnicode(this.props.emoji)
      }
    }
    return (
      <div className="card">
        {this.props.text}
        {getEmoji(this.props.emoji)}
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
