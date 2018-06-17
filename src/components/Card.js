import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  handleDeleteClick = (event) => {
    event.preventDefault();
    this.props.removeCardCallback(this.props);
  }

  // render the update fields here, rather than in main
  handleUpdateClick = (event) => {
    event.preventDefault();
    this.props.updateClickCallback()
  }


  render() {
    let cardEmoji = ''
    if (this.props.emoji) {
      cardEmoji = emoji.getUnicode(this.props.emoji);
    }
    return (
      <article className="card">
        <section className="card__content" onClick={this.handleUpdateClick}>
        <article className='card__content-emoji'>
          {cardEmoji}
        </article>
        <article className='card__content-text'>
          {this.props.text}
        </article>
        </section>
        <section className="card__delete" onClick={this.handleDeleteClick}>x</section>
      </article>
    )
  }
}

Card.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  removeCardCallback: PropTypes.func.isRequired,
  updateClickCallback: PropTypes.func.isRequired
};

export default Card;
