import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    console.log("HIIIII");
    return (
      <div className="card">
        Card

        <tr>
        <td>{this.props.text}</td>
        <td>{this.props.emoji}</td>

      </tr>

      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
};

export default Card;
