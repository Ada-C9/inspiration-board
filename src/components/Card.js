import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteCard = (event) => {
    console.log('button clicked')
    event.preventDefault();
    console.log(`this.props.id = ${this.props.id}`)
    this.props.deleteCardCallback(this.props.id, this.props.index)
  } 


  render() {
    return (
      <section className="card">
      <article className="card__content">
      <div className="card__content-text">{this.props.text}</div>
      <div className="card__content-emoji">{emoji.getUnicode(`${this.props.emoji}`)}</div>
      </article>
      <button onClick={this.deleteCard} className="card__delete">X</button>
      </section>
    )
  }
}

Card.propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    text: PropTypes.string,
    emoji: PropTypes.string,
    deleteCardCallback: PropTypes.func,
};

export default Card;
