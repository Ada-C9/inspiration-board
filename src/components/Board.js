import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


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
      console.log(response);
      this.props.updateStatusCallback(`Successfully loaded cards for ${this.props.boardName}`, 'success');
      const cardData = response.data.slice(0, 100);
      this.setState({
        cards: cardData
      });
    })
    .catch((error) => {
      console.log(error);
      this.props.updateStatusCallback(`There was a problem loading cards: ${error.message}`, 'error');
    })
  }

  addCard = (newCard) => {
    // const updatedCards = this.state.cards;
    // updatedCards.push(newCard);
    // this.setState({
    //   cards: updatedCards
    // });
    this.props.updateStatusCallback(`Creating new card`, 'success');
    const POST_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`
    axios.post(POST_URL, newCard)
      .then((response) => {
        this.props.updateStatusCallback(`New card created!`, 'success');
        console.log(response);
      })
      .catch((error) => {
        this.props.updateStatusCallback(`Something went wrong trying to create a new card: ${error.message}`, 'success');
        console.log(error);
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
      />
    });
    return (
      <section className="board">
        { cards }
        <NewCardForm addCardCallback={ this.addCard } />
      </section>
    )
  }

}

Board.propTypes = {

};

export default Board;
