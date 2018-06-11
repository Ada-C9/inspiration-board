import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
   const getEmoji = this.props.emoji ? emoji.getUnicode(this.props.emoji) : "";
    return (
      <article className="card">
        <span className="card__delete">X</span>
        <section className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{getEmoji}</p>
        </section>
    </article>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
