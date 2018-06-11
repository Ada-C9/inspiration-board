import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARD_DATA["cards"],
    };
  }

  renderCards = () => {
    console.log('Rendering cards')
    const cardList = this.state.cards.map((card, index) => {
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
      <div>
        <section className="board">
          
          {this.renderCards()}
        </section>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
