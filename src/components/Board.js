import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';



const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/brenda/cards'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      status: {
        message: "Successfuly cards loaded!",
        type: "success"
      }
    };
  }


  componentDidMount = () => {

    let board_name = this.props.boardName
    axios.get('https://inspiration-board.herokuapp.com/boards/brenda/cards')

    .then( (response) => {
      this.props.updateStatusCallback(`Successfully loaded  cards from ${board_name}!`, 'success');
      const cardsData = response.data.map((card) =>{
        return {text: card.card.text,
          emoji: card.card.emoji,
          id: card.card.id
        };
      });
      this.setState({cards: cardsData})
    })
  }


  deleteCard = (id) => {

    axios.delete(`https://inspiration-board.herokuapp.com/boards/brenda/cards/${id}`)
    .then((response) => {
      console.log(response);
      this.componentDidMount();
    })
    .catch( (error) => {
      this.setState({ error: error.message });
    });
  }


  addCard = (card) => {

    let updatedCards = this.state.cards;

    axios.post(CARDS_URL, card)
    .then((response) => {
      console.log(response);

      this.props.updateStatusCallback(`Sucessfully added card ${card.name}!` , 'success');
      updatedCards.push(card);

      this.setState({cards: updatedCards});
    })

    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error');

    });
  }

  // cardList = () => {
  //   // const cardList = CARD_DATA.cards.map((card, index) => {
  //   const cardList = this.state.cards.map((card, index) => {
  //     return (
  //       <Card
  //       key={index}
  //       id={card.card.id}
  //       text={card.card.text}
  //       emoji={card.card.emoji}
  //       deleteCard={this.deleteCard}
  //       />
  //     )
  //   });
  //   return cardList;
  // }


  render() {
    const cards = this.state.cards.map((card, index) => {
      return <Card key={index}
      text = {card.text}
      emoji = {card.emoji}
      id = {card.id}
      deleteCard={this.deleteCard}
      />
    }
  )
  return (
    <div className="board">
    <p>{this.state.error}</p>

    <NewCardForm addCardCallback={this.addCard}/>
    {cards}
    </div>
  )
}

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  updateStatusCallback: PropTypes.func.isRequired

};

export default Board;
