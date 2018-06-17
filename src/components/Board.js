import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

// NOTE: WILL RENDER OUT A LIST OF CARDS

const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/AnaLisa/cards';

class Board extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback('Loading Cards...', 'success');
    axios.get(CARDS_URL)
    .then((response) => {
      console.log('Success');
      console.log(response);

      this.props.updateStatusCallback('Successfully loaded cards, Take one!', 'success');
      // if we wanted only a first 10 cards, pre-processing on data, additional pre-processing or logic on data would be done here
      const cards = response.data.slice(0,10);
      // To get all of the cards, we reset the state with the response data (which is the cards)
      this.setState({ cards: cards });
    })
    .catch((error) => {
      console.log('Error :(');
      console.log(error);
      // Alert user to errors on screen by altering the status we are tracking with state
      this.props.updateStatusCallback(error.message, 'error');
    });
  }

  // need a callback function that we will then pass to the NewCardForm
  addCard = (card) => {
    // assuming card is a JS object with all neccessary parts for a card
    let updatedCards = this.state.cards;
    updatedCards.push(card);

    // then update state to updated cards collection
    this.setState({ cards: updatedCards });
    card.emoji = 

    axios.post(CARDS_URL, card)
      .then((response) => {
        console.log(response);
        this.props.updateStatusCallback('Successfully added card', 'success');
      })

      .catch((error) => {
        this.props.updateStatusCallback('Error adding card', 'error');
        console.log(error);
      });
  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      // console.log(card)
      // console.log(card.card.text)
      return <Card key={index}
      text={card.card.text}
      />
    });
    return (
      <div className="board">
      { cards }
      <section className="new-card-form">
      <NewCardForm addCardCallback={this.addCard}/>
      </section>
      </div>
    )
  }

}

export default Board;
