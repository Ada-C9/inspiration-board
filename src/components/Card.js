import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onDelete = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.deleteCardCallback(this.props.id);
  }

  render() {

    const getEmoji = (props) => {
      if (props) {
        return emoji.getUnicode(props)
      }
    }

    return (
      <div className="card card__content">
        <p className="card__content-text">
          {this.props.text}</p>
        <p className="card__content-emoji"> {getEmoji(this.props.emoji)}</p>
        <button
          className="card__delete"
          onClick={this.onDelete}>
          Delete
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
