import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {

  renderEmoji = () => {
    if(this.props.emoji) {
      return (
        <p>{emoji.getUnicode(this.props.emoji)}</p>
      );
    }
  };

  onClickDelete = () => {
    console.log(this.props.id);
    this.props.deleteCardCallback(this.props.id);
  };

  render() {
    return (
      <div className="card">
        <section className="card__content">
          <span className="card__content-text">{this.props.text}</span>
          <span className="card__content-emoji">{this.renderEmoji()}</span>
          <button className="card__delete" onClick= {this.onClickDelete}>X</button>
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
