import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';
import './Card.css';


class Card extends Component {
  static propTypes = {
    boardName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string
  };

  deleteCard = () => {
    console.log(`deleting ${this.props.id}`);
    const DELETE_URL = `https://inspiation-board.herokuapp.com/boards/${this.props.boardName}/cards/${this.props.id}`

    axios.delete(DELETE_URL)
    .then((response) => {
      console.log('in here');
    })
    .catch((error) => {
      console.log('in error');
    })
  }

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
          <button onClick={this.deleteCard} >delete</button>
        </div>
      </section>
    )
  }
}

export default Card;
