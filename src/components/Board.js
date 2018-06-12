import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


class Board extends Component {
  static propTypes = {
    boardName: PropTypes.string.isRequired,
    updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback(`Loading cards for ${this.props.boardName}`, 'success');

    const BOARD_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(BOARD_URL)
    .then((response) => {
      this.props.updateStatusCallback(`Successfully loaded cards for ${this.props.boardName}`, 'success');
      const cardData = response.data.slice(0, 100);
      this.setState({
        cards: cardData
      });
    })
    .catch((error) => {
      this.props.updateStatusCallback(`There was a problem loading cards: ${error.message}`, 'error');
    })
  }

  addCard = (newCard) => {
    this.props.updateStatusCallback(`Creating new card`, 'success');
    const POST_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`
    axios.post(POST_URL, newCard)
      .then((response) => {
        this.props.updateStatusCallback(`New card created!`, 'success');
        const updatedCards = this.state.cards;
        updatedCards.unshift({
          card: response.data.card
        });
        this.setState({
          cards: updatedCards
        });
      })
      .catch((error) => {
        this.props.updateStatusCallback(`Something went wrong trying to create a new card: ${error.message}`, 'error');
      });
  }

  removeCard = (id) => {
    const DELETE_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards/${id}`;
    this.props.updateStatusCallback(`Removing card ${id}`, 'success');

    axios.delete(DELETE_URL)
      .then(() => {
        this.props.updateStatusCallback(`Successfully removed card ${id}`, 'success');
        const updatedCards = this.state.cards.filter((cardInfo) => {
          if (cardInfo.card.id != id) {
            return cardInfo
          }
        });
        this.setState({
          cards: updatedCards
        });
      })
      .catch((error) => {
        this.props.updateStatusCallback(`Encountered an error trying to remove card ${id}: ${error.message}`, 'error');
      });
  }

  render() {
    const cards = this.state.cards.map((cardInfo, index) => {
      return <Card
        key={index}
        boardName={this.props.boardName}
        id={cardInfo.card.id}
        text={cardInfo.card.text}
        emoji={cardInfo.card.emoji}
        removeCardCallback={ this.removeCard }
      />
    });
    return (
      <section className="board">
      <NewCardForm addCardCallback={ this.addCard } />
        { cards }
      </section>
    )
  }

}

export default Board;
