import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string
  };

  constructor(props) {
    super();
    this.state = {
      text: props.text,
      emoji: emoji.getUnicode(props.emoji)
    };
  }

  render() {
    return (
      <div className="card">
        <p>
          { this.state.text }
          <span>{ this.state.emoji }</span>
        </p>
      </div>
    )
  }
}

export default Card;
