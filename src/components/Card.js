import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  renderText = () => {
    if (this.props.text) {
      return(
        <p className="card__content-text">{ this.props.text }</p>
      )
    }
  }

  renderEmoji = () => {
    if (this.props.emoji) {
      return(
        <p className="card__content-emoji">{ emoji.getUnicode(this.props.emoji) }</p>
      )
    }
  }

  selectDelete = () => {
    console.log(this.props.id, this.props.index)
    this.props.deleteCard(this.props.id, this.props.index)
  }
  render() {
    return (
      <div className="card">
        <button type="button" className="card__delete" onClick={ this.selectDelete }>x</button>
        <div className="card__content">
          { this.renderText() }
          { this.renderEmoji() }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;
