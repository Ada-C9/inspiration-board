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
      cards: CARD_DATA.cards
    };
  }

  render() {

    const cardsList = this.state.cards.map((card) => {
      return <Card
        key={card.id}
        text={card.text}
        emoji={card.emoji}
      />
  });
    return (
      <div>
        {cardsList}
      </div>
    );
  }

}

Board.propTypes = {

};

export default Board;
