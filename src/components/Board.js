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

  componentDidMount = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/brenda/cards')
    .then( (response) => {
      console.log(response);
      this.setState({ cards: response.data });
    })
    .catch( (error) => {
      this.setState({ error: error.message });
    });
  }


  deleteCard = (id) => {

    console.log(`https://inspiration-board.herokuapp.com/boards/brenda/cards/${id}`);
    axios.delete(`https://inspiration-board.herokuapp.com/boards/brenda/cards/${id}`)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch( (error) => {
      this.setState({ error: error.message });
    });
  }

  cardList = () => {
    // const cardList = CARD_DATA.cards.map((card, index) => {
    const cardList = this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          deleteCard={this.deleteCard}
        />
      )
    });
    return cardList;
  }


  render() {
    return (
      <div className="board">
        <p>{this.state.error}</p>
          {this.cardList()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
