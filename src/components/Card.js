import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    deleteCallback: PropTypes.func,
    id: PropTypes.string,
    index: PropTypes.string
  };

  onCardDelete = () => {
    this.props.deleteCallback(this.props.index, this.props.id);
    // console.log(this.state);

  }

  render() {
    return (
      <section className="card">
      <button className="card__delete" onClick={this.onCardDelete}>x</button>
      <div className="card__content">
        <h1 className="card__content-text">
          {this.props.text}</h1>
        <p className="card__content-emoji">
        {emoji.getUnicode(`${this.props.emoji}`)}</p>
      </div>
      </section>
    )
  }
}

Card.propTypes = {

};

export default Card;
