import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import FaTrash from 'react-icons/lib/fa/trash'

import './Card.css';

class Card extends Component {
  getEmoji = () => {
    if (this.props.emoji) {
      return (emoji.getUnicode(this.props.emoji));
    }
  }

  deleteThisCard = (event) => {
    event.preventDefault();
    this.props.deleteCardCallback(this.props.id);
  };

  render() {
    return (
      <div className="card">
        <div onClick={this.deleteThisCard} className='card__delete'><FaTrash/></div>
          <section className="card__content">
            <p className="card_content-text">{this.props.text}</p>
            <div className="card_content-emoji">{this.getEmoji()}</div>
          </section>
      </div>

    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired

};

export default Card;
