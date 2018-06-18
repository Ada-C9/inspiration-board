import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import NewCardForm from './NewCardForm';

import './Board.css';

class Board extends Component {

  constructor() {
    super();

    this.state = {
      cards: [],
      message: '',
    };
  }

  componentDidMount = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/zheng/cards')
      .then( (response) => {
        this.setState({
          cards: response.data,
        });
      })
      .catch( (error) => {
        this.setState({
          message: error.message,
        });
      });
  }

  renderCards = () => {
    const cards = this.state.cards.map( (card, index) => {
      return (
        <Card
          key={index}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          deleteCardCallback={this.deleteCard}
          />
      );
    });

    return cards;
  }

  renderMessage = () => {
    if (this.state.message) {
      return (
        <p>{this.state.message}</p>
      );
    }
  }

  addCard = (card) => {
    const cards = this.state.cards;

    axios.post('https://inspiration-board.herokuapp.com/boards/zheng/cards', card)
      .then((response) => {
        cards.push(response.data);
        this.setState({
          cards,
          message: 'New card was added successfully'
        });
      })
      .catch((error) => {
        this.setState({
          message: error.message,
        });
      });
  }

  deleteCard = (id) => {
    URL = `https://inspiration-board.herokuapp.com/boards/:board_name/cards/${id}`
    let cards = this.state.cards;

    axios.delete(URL)
      .then((response) => {
        cards = cards.filter(card => card.card.id !== id);
        this.setState({
          cards,
          message: 'Card was deleted successfully',
        });
      })
      .catch((error) => {
        this.setState({
          message: error.message,
        });
      });
  }

  render() {
    return (
      <div className="board">
        <NewCardForm
          addCardCallback={this.addCard}
          />
        <section className="validation-errors-display">{this.renderMessage()}</section>
        <section className="cards">{this.renderCards()}</section>
      </div>
    )
  }

}

export default Board;
