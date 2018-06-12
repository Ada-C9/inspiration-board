import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    console.log('Rendering');
    return (
      <section className="card">
      <p> {this.props.text} </p>
      <br/>
      <p> {emoji.getUnicode(`${this.props.emoji}`)} </p>
      </section>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
