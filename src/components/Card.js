import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';
// NOTE: RENDERS OUT A SINGLE CARD

class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    // emoji: PropTypes.emoji.isRequired
  };

  render() {
    return (
      // <h2>{ this.props.emoji}</h2>
      <div className="card">
        <section className="card__content">
        <article className=".card__content-text">
        <h3>{ this.props.text }</h3>
        </article>
        </section>
      </div>
    )
  }
}


export default Card;
