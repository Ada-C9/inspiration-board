import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import '../styles/Card.css';

class Card extends Component {
  deleteClickHandler = () => {
    this.props.deleteCallBack(this.props.index, this.props.id)
  }


  render() {
    return (
      <div className="card">
        <p className="card__content card__content-text">{this.props.text}</p>
        <p className="card__content card__content-emoji">{emoji.getUnicode(`${this.props.emoji}`)}</p>
        <button className="card__delete " onClick={this.deleteClickHandler}>Delete</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
