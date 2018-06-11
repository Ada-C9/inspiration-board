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

  render() {
    console.log(this.props);

    return (
      <div className="card">
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
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
