import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{this.props.emoji && this.props.emoji.length > 0 ? emoji.getUnicode(this.props.emoji): ""}</p>
        </div>
        <span
          data-card-id={this.props.id}
          onClick={(event) => this.props.deleteCardCallback(event.target.dataset.cardId)}
          className="card__delete">×</span>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
