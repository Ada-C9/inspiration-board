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
    axios.get('https://inspiration-board.herokuapp.com/boards/brittany/cards')
      .then( (response) => {
        this.setState({
          cards: response.data,
        });
      })
      .catch( (error) => {
        this.setState({
          error: error.message,
        });
    });
  }

  renderCards = () => {
    const cards = this.state.cards.map( (card, index) => {
      return (
        <Card
          id={card.card.id}
          key={index}
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
  renderError = () => {
    if (this.state.error) {
      return (
        <p>{this.state.error}</p>
      );
    }
  }
  addCard = (card) => {
   const cards = this.state.cards;
   const newCard = {'card': card};

   axios.post('https://inspiration-board.herokuapp.com/boards/brittany/cards', card)
       .then((response) => {
         cards.push(response.data);
         this.setState({
           cards,
           message: 'New card added!'
         });
       })
       .catch((error) => {
         this.setState({
           message: error.message,
         });
       });
   }
   deleteCard = (id) => {
    URL = `https://inspiration-board.herokuapp.com/boards/brittany/cards/${id}`
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
      <div>
      <NewCardForm addCardCallback={this.addCard}/>
        <section className="validation-errors-display">{this.renderMessage()}</section>
        <section className="cards">{this.renderCards()}</section>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
