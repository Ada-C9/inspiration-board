import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import emoji from 'emoji-dictionary';

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

  render() {
    return (
      <div>
        <div>
          {this.state.cards[1].text}
          {emoji.getUnicode(this.state.cards[1].Emoji)}
        </div>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
