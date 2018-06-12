import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  getEmoj = (image) => {
    if (image) {
      return emoji.getUnicode(image);
    }
  };

  deleteCard = (event) => {
    event.preventDefault();
    this.props.deleteCardCallback(this.props.id, this.props.index)
  }

  render() {
    return (
      <div className="card">
        <div className="card__delete" onClick={this.deleteCard}>X</div>
        <article className="card__content">
          <div className="card__content-text">
          {this.props.text}
          </div>
          <div className="card__content-emoji">
          {this.getEmoj(this.props.emoji)}
          </div>
        </article>
      </div>
    );
  }
}

Card.propTypes = {
  key: PropTypes.number,
  index: PropTypes.number,
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func,
};

export default Card;
