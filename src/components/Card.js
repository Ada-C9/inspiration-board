import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string
  };

  render() {
    return (
      <section className="card">
        <div className="card__content-text card__content">
          {this.props.text}
        </div>
        <div className="card__content-emoji card__content">
        {emoji.getUnicode(`${this.props.emoji}`)}
        </div>
      </section>
    )
  }
}

Card.propTypes = {

};

export default Card;
