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

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/victoria/cards')
      .then((response) => {
        this.setState({ cards: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  addCard = (card) => {
    axios.post('https://inspiration-board.herokuapp.com/boards/victoria/cards',
              card)
      .then((response) => {
        this.setState({
          message: `Successfully Added A Card!`
        });
        window.parent.location.reload()
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          message: error.message,
        });
      });
  }

  render() {

    const cardKeysAttempt = Object.keys(this.state.cards).map(
      key =>
      ({
        cardId: this.state.cards[key]["card"]["id"],
        cardTxt: this.state.cards[key]["card"]["text"],
        cardEmo: this.state.cards[key]["card"]["emoji"]
      })
    )

    const cardComponents = cardKeysAttempt.map((card) => {
      return (
        <li key = {card.cardId} >
          <Card
            cardID = {card.cardId}
            cardText = {card.cardTxt}
            cardEmoji = {card.cardEmo}
          />
        </li>
      )
    });

    return (
      <section className = "board">
        <header >
          {this.state.message ? this.state.message: ""  }
        </header>
        {cardComponents}
        <NewCardForm addCardCallback={this.addCard} />
      </section>
    )
  }

}

Board.propTypes = {
};

export default Board;
