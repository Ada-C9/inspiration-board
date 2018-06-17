import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';

import './Card.css';

class Card extends Component {

  deleteCard = (event) => {
    this.props.deleteCardCallback(this.props.id);
    }


  render() {

    const ifEmoji = () => {
      if (this.props.emoji) {
        return <span className='card__content-emoji'>{emoji.getUnicode(this.props.emoji)}</span>
      }
    }

    return (
      <div className="card card__content">
        <button className="card__delete" onClick={this.deleteCard}>
          x
        </button>

        <span className='card__content-text'>{this.props.text}</span>
        {ifEmoji()}
      
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
