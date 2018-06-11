import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <article className="card">
        <div className="content">
          <p className="text">{this.props.text}</p>
          <p className="emoji">{this.props.emoji}</p>
        </div>
      </article>
    )
  }
}

Card.propTypes = {
 text: PropTypes.string,
 emoji: PropTypes.string
};

export default Card;
