import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    // console.log(`${this.props.url}${this.props.boardName}/cards`);
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        console.log(response.data);
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCardRequest = (id) => {
    // console.log(`${this.props.url}${this.props.boardName}/cards/${id}`);
    axios.delete(`${this.props.url}${this.props.boardName}/cards/${id}`)
      .then((response) => {
        console.log(response);
        this.deleteCardFromState(id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCardFromState = (id) => {
    const allCards = this.state.cards;
    const tempCards = this.state.cards;
    tempCards.splice(allCards.findIndex(card => card.card.id === id), 1);
    this.setState({ cards: tempCards });
  }

  renderCards = () => {
    const cardList = this.state.cards.map( (card, index) => {
      return(
        <Card
          key = { index }
          id = { card.card.id }
          text = { card.card.text }
          emoji = { card.card.emoji }
          deleteCardCallback = { this.deleteCardRequest }
        />
      );
    });
    return cardList;
  }

  // addCard = (card) => {
  //
  // }

  render() {
    return (
      <div>
        <NewCardForm addCardCallback = {this.addCard}/>
        <div className = "board">
          { this.renderCards() }
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
