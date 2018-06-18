import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import '../styles/Card.css';

class Card extends Component {
  getEmoji = () => {
    if (this.props.emoji) {
      return (emoji.getUnicode(this.props.emoji));
    }
  }

  deleteClickHandler = () => {
    this.props.deleteCallBack(this.props.index, this.props.id)
  }


  render() {
    return (
      <div className="card">
        <p className="card__content card__content-text">{this.props.text}</p>
        <p className="card__content card__content-emoji">{this.getEmoji()}</p>
        <p><button className="card__delete " onClick={this.deleteClickHandler}>Delete</button></p>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCallBack: PropTypes.func.isRequired
};

export default Card;
