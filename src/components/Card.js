import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    console.log('Rendering');
    return (
      <section className="card">
      <div className="card__content">
      <div className="card__content-text" > {this.props.text} </div>
      <br/>
      <div className="card__content-emoji" > {emoji.getUnicode(`${this.props.emoji}`)} </div>
      </div>
      </section>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
