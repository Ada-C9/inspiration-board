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
    const BOARD_URL =  `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(BOARD_URL)
    .then((response) => {
      console.log(response.data);
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message,
      });
    });
  };

  renderCardList =() => {
    const cardList = this.state.cards.map((item, index) => {
      return (
        <Card
        key= {index}
        id= {item.card.id}
        text= {item.card.text}
        emoji= {item.card.emoji}
        deleteCardCallback={this.deleteCard}
        />
      );
    });
    return cardList;
  };

  renderMessage = () => {
    if (this.state.message) {
      return (
        <p>{this.state.message}</p>
      );
    }
  };

  addCard = (card) => {
    const cardList = this.state.cards;
    const newCard = { card: card };
    const POST_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`
    axios.post(POST_URL, card)
    .then((response) => {
      cardList.push(newCard);
      this.setState({
        message: 'Succesfully added a new card!',
        cardList,
      });
    })
    .catch((error) => {
      this.setState({
        message: error.message,
      });
    });
  };

  deleteCard = (id) => {
    const URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards/${id}`;
    let cardList = this.state.cards;

    axios.delete(URL)
    .then((response) => {
      cardList = cardList.filter(item => item.card.id !== id);
      this.setState({
        cards: cardList,
        message: 'Card was succesfully deleted',
      });
    })
    .catch((error) => {
      this.setState({
        messsage: error.message,
      });
    });

  };

  render() {

    return (
      <section className="board">
      <NewCardForm addCardCallback={this.addCard} />
      <div className="cards">{this.renderCardList()}</div>
      {this.renderMessage()}
      </section>
    );}
  }

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
};

  export default Board;
