import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <article className="card">
        <p>{this.props.text}</p>
        <p>{this.props.emoji}</p>
      </article>
    )
  }
}

Card.propTypes = {
 text: PropTypes.string,
 emoji: PropTypes.string
};

export default Card;
