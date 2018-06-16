import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content-text">
          {this.props.quote}
          </div>
          <div className="card__content-emoji">
          {emoji.getUnicode(`${this.props.emoji}`)}
          </div>
          <button className="card__delete" onClick={ () => {
            this.props.removeCard(this.props.index)
          } }>
            delete
          </button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  quote: PropTypes.string,
  emoji: PropTypes.string,
  removeCard: PropTypes.func,
  index: PropTypes.number,
};

export default Card;
