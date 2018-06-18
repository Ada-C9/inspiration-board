import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';


import './Card.css';

class Card extends Component {

  onDeleteClick = (event) => {
    console.log(event.target.id);
    event.preventDefault();
    this.props.removeCard(event.target.id);
  }

  render() {

    return (
      <div className="card">
        <span id={this.props.id} className="card__delete" onClick={this.onDeleteClick}> x</span>
        <section className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{emoji.getUnicode(String(this.props.emoji))}</p>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  removeCard: PropTypes.func,
};

export default Card;
