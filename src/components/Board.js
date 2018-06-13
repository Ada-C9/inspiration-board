import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// NOTE: WILL RENDER OUT A LIST OF CARDS

class Board extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  constructor(props) {
    super();

    this.state = {
      // cards: [],
      cards: props.data
    };
  }

  // need a callback function that we will then pass to the NewCardForm
  addCard = (card) => {
    // assuming card is a JS object with all neccessary parts for a card
      let updatedCards = this.state.cards;
      updatedCards.push(card);

      // then update state to updated cards collection
      this.setState({ cards: updatedCards });
  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      return <Card key={index}
      text={card.text}
      />
    });
    return (
      <div className="board">
      <section className="new-card-form">
      <NewCardForm addCardCallback={this.addCard}/>
      </section>
      { cards }
      </div>
    )
  }

}

export default Board;
