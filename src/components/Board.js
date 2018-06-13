import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const URL = 'https://inspiration-board.herokuapp.com/boards/Hannah-Cameron/cards/'

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
    let deleteUrl = URL + `${cardId}`
    console.log(deleteUrl);
    axios.delete(deleteUrl)
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

https://inspiration-board.herokuapp.com/boards/Hannah-Cameron/cards/?text=you are amazing&emoji=heart_eyes

  addCard = (message) => {
    let addUrl = URL + `${mesage}`
    axios.post(addUrl)
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
        <h3>Positivity Board! </h3>
        { cards }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
