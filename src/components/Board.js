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
      cards: [],
    };
  }

  renderCardList = () => {
    const cardList = CARD_DATA.cards.map((card, index) => {
      return (
        <Card
          key={index}
          text={card.text}
          emoji={card.emoji}
        />
      );
    });
    return cardList;
  }

  render() {
    return (
      <div className="board">
        {this.renderCardList()}
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
