import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

 const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(CARDS_URL)
    .then((response) => {
      console.log('Success!');
      console.log(response);
      console.log(response.data[0]);

      this.setState({cards: response.data})

    })
    .catch((error)=>{
      console.log('Error :(');
      console.log(error);

    });
  }


  render() {
    const cards = this.state.cards.map((card, index)=>{
      return <Card key={index}
      emoji={card.card.emoji}
      id={card.card.id}
      text={card.card.text} />
    })

    return (
      <div>
        Board
        {cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
