import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARD_URL = 'https://inspiration-board.herokuapp.com/boards/kiera-thomasson/cards'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

componentDidMount() {
  axios.get(BOARD_URL)
    .then((response) =>{
      console.log('Success');
      console.log(response);

      const cards = response.data;
      this.setState({cards: cards});
    })
    .catch((error) => {
      console.log(error);
    })
}

  render() {
    const cards = this.state.cards.map((post,index) => {
      return <Card
      key={ index }
      text={ post.card.text }
      emoji={ post.card.emoji }
      />
    });
    return (
      <div>
        Board
        { cards }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
