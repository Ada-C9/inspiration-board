import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';



class Card extends Component {

  getEmoji = () => {
    if (this.props.emoji) {
      return emoji.getUnicode(this.props.emoji)
    }
  };
  render() {

    return (
      <div className='card'>
        <article className='card__content'>
          <p className='card__content-text'><strong>{ this.props.text }</strong></p>
          <p className='card__content-emoji'>{ this.getEmoji() }</p>
        </article>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

export default Card;
