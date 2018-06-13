import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  removeCard = (event) => {
    console.log(event.target.id);
    event.preventDefault();
    this.props.deleteCard(this.props.id);
  }

  render() {
    console.log('Rendering');
    return (
      <section className="card">
      <div className="card__content">

      <button className="card__delete" onClick={this.removeCard}>
      x
      </button>

      <br/>

      <div className="card__content-text">
      {this.props.text}
      </div>

      <br/>

      <div className="card__content-emoji" >
      {emoji.getUnicode(`${this.props.emoji}`)}
      </div>

      </div>
      </section>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
