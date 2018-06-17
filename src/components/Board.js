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
        console.log('Here is the response');
        console.log(response);
        this.setState({ cards: response.data });
        console.log('now reporting state:')
        console.log(this.state.cards)
        console.log('now reporting the first state element:')
        console.log(this.state.cards[0])
        console.log('now trying to dig:')
        console.log(this.state.cards[0]["card"]["id"])
      })
      .catch((error) => {
        this.setState({ error: error.message });
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
            cardText = {card.cardTxt}
            cardEmoji = {card.cardEmo}
          />
        </li>
      )
    });

    console.log('Here is cardKeysAttempt')
    console.log(cardKeysAttempt)
    console.log('Here is cardComponents')
    console.log(cardComponents)

    return (
      <div>
        {cardComponents}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
