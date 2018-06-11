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
    return CARD_DATA.cards;
  }

  getCards = () => {
    return this.state.cards.map((cardData, index) => {
      return (
        <Card
          key={index}
          text={cardData.text}
          emoji={cardData.emoji}
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
