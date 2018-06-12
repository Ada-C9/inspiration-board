import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  showEmoji = () => {
    if (this.props.emoji) {
      return (emoji.getUnicode(this.props.emoji));
    }
  }

  deleteCard = () => {
    console.log(this.props.id)
    this.props.deleteThisCard(this.props.id, this.props.key)
  }

  render() {
    return (
      <div className="card">
      <span onClick={this.deleteCard} className="card__delete">x</span>
        <section className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{this.showEmoji()}</p>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteThisCard: PropTypes.func
};

export default Card;
