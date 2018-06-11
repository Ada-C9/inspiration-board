import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string
  };

  render() {
    let emojiSymbol = '';
    if (this.props.emoji != null) {
      emojiSymbol = emoji.getUnicode(this.props.emoji);
    }
    return (
      <section className="card">
        <div className="card__content">
          <p className="card__content-text">
          { this.props.text }
          <span className="card__content-emoji">{ emojiSymbol }</span>
          </p>
        </div>
      </section>
    )
  }
}

export default Card;
