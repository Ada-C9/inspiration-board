import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {
          inspoText: 'Be Here Now.',

        },
        {
          inspoText: 'Ok, now be somewhere else',

        },
        {
          inspoText: 'Being present in the present is the greatest present you can give yourself',
          inspoEmoji: 'gift',
        },
      ],
    };
  }


  render() {

    console.log("In render function, this is the current set of cards, before converting to card components:");

    console.log(this.state.cards);

    const cardComponents = this.state.cards.map((card, index) => {
      return (
        <li key={ index }>
          <Card
             cardText={card.inspoText}
             cardEmoji={card.inspoEmoji}
          />
        </li>
      );
    });

    return (
      <div>
        <ul>
          {cardComponents}
        </ul>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
