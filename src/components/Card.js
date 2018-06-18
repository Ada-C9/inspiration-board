import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';
import axios from 'axios/index';

toEmoji = ()

class Card extends Component {


  removeThisCard = () => {
    this.props.removeCardCallback(this.props.index);
  };

  render() {
   const getEmoji = this.props.emoji ? emoji.getUnicode(this.props.emoji) : "";
    return (
      <article className="card">
        <p onClick={this.removeThisCard}
           className="card__delete">x</p>
        <section className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{getEmoji}</p>
        </section>
    </article>
    )
  }
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  removeCardCallback: PropTypes.func.isRequired
};

export default Card;

