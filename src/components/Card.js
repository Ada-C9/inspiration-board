import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';


class Card extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    removeCardCallback: PropTypes.func.isRequired
  };

  removeThisCard = () => {
    this.props.removeCardCallback(this.props.id);
  };

  render() {


    let emojiSymbol = '';
    if (this.props.emoji != null) {
      emojiSymbol = emoji.getUnicode(this.props.emoji);
    }
    return (
      <section className="card">
        <div className="card__content">
          <p className="card__content-text">
          { this.props.text }
          <span className="card__content-emoji">{ emojiSymbol }</span>
          </p>
          <button onClick={ this.removeThisCard } >delete</button>
        </div>
      </section>
    )
  }
}

export default Card;
