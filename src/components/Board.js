import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {

  constructor(props) {
    super();

    this.state = {
      cards: props.data,
    };
  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      return (
        <Card
        key={index}
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        />
      );
    });

    return (
      <div>
        { cards }
      </div>
    )
  }

}

Board.propTypes = {
  data: PropTypes.array.isRequired
};

export default Board;
