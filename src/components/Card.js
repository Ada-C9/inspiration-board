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
        <article className="card__content">
          <p className="card__content-text">
            {this.props.text}
          </p>
          <div card__content-emoji>
            {this.getEmoji()}
          </div>
        </article>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
