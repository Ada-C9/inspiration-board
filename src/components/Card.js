import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    deleteCallback: PropTypes.func
  };

  onCardDelete = () => {
    this.props.deleteCallback(this.props.index, this.props.id);
    // console.log(this.state);

  }

  render() {
    return (
      <div className="card">
        <p className="card__content-text card__content">
          {this.props.text}</p>
        <p className="card__content-emoji card__content">
        {emoji.getUnicode(`${this.props.emoji}`)}</p>
        <p>
        <button className="card__delete" onClick={this.onCardDelete}>Delete</button>
        </p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
