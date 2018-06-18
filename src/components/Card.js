import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteOnSubmit = (event) => {
    // console.log(this.props.id);
    this.props.onDeleteCard(this.props.id);
  }

  render() {
    const emojis = this.props.emoji

    return (
      <div className="card">
      Card

      {this.props.id}
      {this.props.text}
      {emoji.getUnicode(`${emojis}`)}

      <button
      type="submit"
      onClick={this.deleteOnSubmit}>Delete</button>

      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
