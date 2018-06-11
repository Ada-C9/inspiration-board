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
      cards: [{
        "text": "Make sure you pet a dog this week!"
      }],
    };
  }

  render() {
    console.log("I'm inside!");

    const attr_cards = this.state.cards

    const cards = attr_cards.map((card, index) => {
      console.log("inside cards");
      return <Card key={index} text={card.text} emoji={card.emoji}/>
    });

    return (
      <div>
      Board
        <table>
          <tbody>
          { cards }
          </tbody>
        </table>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
