import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  displayEmoji = () => {
    if (this.props.emoji) {
      return emoji.getUnicode(this.props.emoji)
    }
  };

  removeCard = (event) => {
    console.log(event.target.id);
    event.preventDefault();
    this.props.deleteCard(this.props.id);
  }

  render() {
    console.log('Rendering a card')
    return (
      <div className="card">
        <button className="card__delete" onClick={this.removeCard}>X</button>
        <div className="card__content">

          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{this.displayEmoji()}</p>
          </div>
        </div>
      )
    }
  }

  Card.propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    deleteCard: PropTypes.func,
    id: PropTypes.number.isRequired,
  };

  export default Card;
