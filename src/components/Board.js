import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    console.log(`${this.props.url}${this.props.boardName}/cards`);
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        console.log(response.data);
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCardFromList = (id) => {
    const cardIndex = this.state.cards.findIndex(card => card.card.id === id);
    // console.log(cardIndex);
    // console.log(this.state.cards[cardIndex]);
    const tempCards = this.state.cards;
    tempCards.splice(cardIndex, 1);

    this.setState({
      cards: tempCards
    });
  }

  deleteCardRequest = (id) => {
    console.log(`${this.props.url}${this.props.boardName}/cards/${id}`);
    axios.delete(`${this.props.url}${this.props.boardName}/cards/${id}`)
      .then((response) => {
        console.log(response);
        this.deleteCardFromList(id);  
      })
      .catch((error) => {
        console.log(error);
      });
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

  render() {
    return (
      <div className = "board">
        { this.renderCards() }
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
