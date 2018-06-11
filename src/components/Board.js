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

  componentDidMount() {
    const cards = []
    this.setState({
      cards: CARD_DATA.cards
    });
  }

  render() {
    const cardRenders = this.state.cards.map(card => {
      return (
        <Card text={card.text} emoji={card.emoji} />
      )
    })
    return (
      <div className="board">
        {cardRenders}
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
