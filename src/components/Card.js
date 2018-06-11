import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

deleteCard = () => {
console.log('button clicked')
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

};

export default Card;

// https://inspiration-board.herokuapp.com/boards/:board_name/cards/:card_id
