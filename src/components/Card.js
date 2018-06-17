import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  getEmoji = () => {
    if (this.props.emoji) {
      return (emoji.getUnicode(this.props.emoji));
    }
  }

  deleteCard = (event) => {
    event.preventDefault();
    this.props.removeCard(this.props.id, this.props.index)
  }

  render() {
    return (
      <div className="card">
        <div onClick={this.deleteCard} className='card__delete'>X</div>
        <article className="card__content">
          <p className="card__content-text">
            {this.props.text}
          </p>
          <div className="card__content-emoji">
            {this.getEmoji()}
          </div>
        </article>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default Card;
