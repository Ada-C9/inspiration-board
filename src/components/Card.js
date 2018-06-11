import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
     text: PropTypes.string,
     emoji: PropTypes.string,

   }

  render() {
    const text = this.props.text
    const emoji = this.props.emoji

    return (
      <div className="card">
        <p>{text}</p>
        <p>{emoji}</p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
