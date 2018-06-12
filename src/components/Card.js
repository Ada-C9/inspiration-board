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
    console.log(this.props.id);
    this.props.deleteCard(this.props.id)
  }

  render() {
    return (
      <div className="card">
        <div onClick={this.deleteCard} className='card__delete'>X</div>
          <section className="card__content">
            < p className="card_content-text">{this.props.text}</p>
            <div className="card_content-emoji">
              {this.getEmoji()}
            </div>
            </section>
        </div>

    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCard: PropTypes.func,

};

export default Card;
