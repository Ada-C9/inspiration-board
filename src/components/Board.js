import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BASE_URL = "https://inspiration-board.herokuapp.com/boards/"

class Board extends Component {
  constructor() {
    super();

    this.state = {
      boardName: 'taco',
      cards: this.getBootstrappedCards(),
    };
  }

  getBootstrappedCards = () => {
    let initialCards = [];
    CARD_DATA.cards.forEach((card) => {
      initialCards.push(
        {card: {
          "text": card.text,
          "emoji": card.emoji
        }}
      )
    })

    return initialCards
  }

  componentDidMount = () => {
    const BOARD_URL = BASE_URL + this.state.boardName + "/cards"

    axios.get(BOARD_URL)
      .then((response) => {
        this.setState({cards: response.data});

      }).catch((error) => {
        console.log(error.message);
      });
  }

  deleteCard = (cardId) => {
    console.log(cardId);
    const DELETE_URL = `https://inspiration-board.herokuapp.com/boards/${this.state.boardName}/cards/${cardId}`
    console.log(DELETE_URL);
  }

  createNewPet = (data) => {
    const NEW_PET_URL = BASE_URL + this.state.boardName + "/cards"
    axios.post(NEW_PET_URL, data)
      .then((response) => {
        let newState = this.state.cards.concat(response.data);
        this.setState({cards: newState});

      }).catch((error) => {
        console.log(error.message);
      });
  }



  getCards = () => {
    return this.state.cards.map((cardData, index) => {
      return (
        <Card
          key={index}
          id={cardData.card.id}
          text={cardData.card.text}
          emoji={cardData.card.emoji}
          onDeleteClick={this.deleteCard}
        />
      )
    })
  }


  render() {
    return (
      <main>
        <NewCardForm onSubmitForm={this.createNewPet}/>
        <div className="board">
          {this.getCards()}
        </div>
      </main>
    )
  }

}

Board.propTypes = {
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
