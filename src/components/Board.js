import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const EMOJI = require("emoji-dictionary");

const url="https://inspiration-board.herokuapp.com/boards/";

class Board extends Component {
  static propTypes = {
    boardName: PropTypes.string.isRequired,
    updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {

    let boardURL = `${url}${this.props.boardName}/cards`

    axios.get(boardURL)
      .then((response) => {

        this.props.updateStatusCallback('successfully loaded cards', 'success');

        let cardInfo = response.data.slice(0,100);


        let cards = [];

        let i;
        for (i = 0; i < cardInfo.length; i++) {
          let card = {};

          card["id"] = cardInfo[i].card.id
          card["text"] = cardInfo[i].card.text
          card["emoji"] = cardInfo[i].card.emoji

          cards.push(card);
        }

        this.setState({cards: cards});
      })
      .catch((error) => {

        this.props.updateStatusCallback(error.message, 'error');
      });
  }

  deleteCard = (cardID) => {

    let deleteURL = `${url}${this.props.boardName}/cards/${cardID}`;
    axios.delete(deleteURL);


    let cards = this.state.cards;

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardID) {
        cards.splice(i, 1)

        this.setState({cards: cards});
      }
    }
  }

  addCard = (card) => {
    let boardURL = `${url}${this.props.boardName}/cards`
    axios.post(boardURL, card);

    let updatedCards = this.state.cards;
    updatedCards.push(card);
    this.setState({cards: updatedCards});
  }

  render() {

    const cards = this.state.cards.map((card, index) => {

      let uniEmoji = null;
      if (card.emoji) {
        uniEmoji = EMOJI.getUnicode(card.emoji);
      }

      return (
      <Card key={index}
        id={card.id}
        text={card.text}
        emoji={uniEmoji}
        deleteCardCallback={this.deleteCard} />
      )
    });

    return (
      <section>

        <NewCardForm addCardCallback={this.addCard} />

        <div className='board'>
          {cards}
        </div>

      </section>
    )
  }
}

export default Board;
