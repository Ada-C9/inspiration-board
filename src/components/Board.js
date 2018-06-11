import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: this.getBootstrappedCards(),
    };
  }

  getBootstrappedCards = () => {
    let initialCards = [];
    CARD_DATA.cards.forEach((card) => {
      initialCards.push(
        {card: {
          "text": card.text,
          "emoji": card.emoji
        }}
      )
    })

    return initialCards
  }

  componentDidMount = () => {
    const BOARD_URL = "https://inspiration-board.herokuapp.com/boards/taco/cards"

    axios.get(BOARD_URL)
      .then((response) => {
        this.setState({cards: response.data});

      }).catch((error) => {
        console.log(error.message);
      });
  }

  getCards = () => {
    return this.state.cards.map((cardData, index) => {
      console.log(cardData.card);
      return (
        <Card
          key={index}
          text={cardData.card.text}
          emoji={cardData.card.emoji}
          />
      )
    })
  }


  render() {
    return (
      <div className="board">
          {this.getCards()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
