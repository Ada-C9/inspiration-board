import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  getEmoji = (emojiText) => {
    return emojiText ? emoji.getUnicode(this.props.emoji) : null;
  }

  onXClick = () => {
    this.props.onDeleteClick(this.props.id);
  }

  render() {
    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">
            {this.props.text}
          </p>
          <p className="card__content-emoji">
            {this.getEmoji(this.props.emoji)}
          </p>
        </div>
        <p className="card__delete" onClick={this.onXClick}>X</p>

      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default Card;
