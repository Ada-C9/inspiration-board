import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const MY_BOARD_URL = "https://inspiration-board.herokuapp.com/boards/maria/cards"

class Board extends Component {

  static propTypes = {
    boardName: PropTypes.string.isRequired
  };

  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    axios.get(MY_BOARD_URL)
      .then((response) => {
        console.log(response);

      const newCards = response.data
      this.setState({ cards: newCards });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const myCards = this.state.cards.map((message, index) => {
      return <Card key={index}
      text={message.card.text}
      emoji={message.card.emoji} />
    });

    return (
      <div className="board">
      { myCards }
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
