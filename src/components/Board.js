import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import Status from './Status';

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
    console.log('in componentDidMount()');
    console.log(this.props.boardName);

    let boardURL = url + this.props.boardName + '/cards'

    axios.get(boardURL)
      .then((response) => {
        console.log('success');
        console.log(response);

        this.props.updateStatusCallback('successfully loaded cards', 'success');

        const cards = response.data.slice(0,100);
        this.setState({cards: cards});
      })
      .catch((error) => {
        console.log('error');
        console.log(error);

        this.props.updateStatusCallback(error.message, 'error');
      });
  }

  deleteCard = (cardID) => {
    console.log('in deleteCard()');
    console.log(cardID);

    let deleteURL = url + this.props.boardName + '/cards' + '/' + cardID;

    // need to rebuild cards list without the removed card
    // must call the API
    this.setState({cards: []});
  }

  render() {

    const cards = this.state.cards.map((card, index) => {

      let uniEmoji = null;
      if (card.card.emoji) {
        uniEmoji = EMOJI.getUnicode(card.card.emoji);
      }

      return (
      <Card key={index}
        id={card.card.id}
        text={card.card.text}
        emoji={uniEmoji}
        deleteCardCallback={this.deleteCard} />
      )
    });

    return (
      <section className='board'>
        {cards}
      </section>
    )
  }
}

export default Board;
