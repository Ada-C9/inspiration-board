import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  static propTypes = {
    // TODO should this be string?
    boardName: PropTypes.string.isRequired
  };


  render() {
    const cards = CARD_DATA["cards"].map((message, index) => {
      return <Card key={index}
      text={message.text}
      emoji={message.emoji} />
    });

    return (
      <div className="board">
        { cards }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
