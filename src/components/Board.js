import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const DELETE_URL = 'https://inspiration-board.herokuapp.com/boards/Hannah-Cameron/cards/'

class Board extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  }

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then((response) => {
      console.log("response.data");
      console.log(response.data);
      const cards =  response.data
      this.setState({ cards: cards });

    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteCard = (cardId, index) => {
    let url = DELETE_URL + `${cardId}`
    console.log(url);
    axios.delete(url)
    .then((response) => {
      console.log(response);

      let remainingCards = this.state.cards
      remainingCards.splice(index, 1)
      console.log('remaining cards');
      console.log(remainingCards);
      this.setState({ cards: remainingCards });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {

    const cards = this.state.cards.map((message, index) => {
      return <Card key={index}
         text={message.card.text}
         emoji={message.card.emoji}
         id={message.card.id}
         deleteCardCallback={this.deleteCard}
         index={index}/>
       })

    return (
      <div className="board">
        Board
        { cards }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
