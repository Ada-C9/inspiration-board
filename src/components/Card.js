import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static PropTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string
  };


  render() {
    return (
      <section className="card">
      
        <article className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>

          <div className="card__content-emoji">
            {emoji.getUnicode(`${this.props.emoji}`)}
          </div>

          <div className="card__delete">
          </div>
        </article>

      </section>
    )
  }
}

Card.propTypes = {

};

export default Card;
