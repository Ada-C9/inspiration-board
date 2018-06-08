import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h2 className="centered title">{this.props.text}</h2>
        <span
          data-card-id={this.props.id}
          onClick={(event) => this.props.deleteCardCallback(event.target.dataset.cardId)}
          className="delete">×</span>
        <p className="emoji">{this.props.emoji && this.props.emoji.length > 0 ? emoji.getUnicode(this.props.emoji): ""}</p>
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
