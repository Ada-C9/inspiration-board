import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Cards_URL = 'https://inspiration-board.herokuapp.com/boards/Dikla/cards'
class Board extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    updateStatusCallback: PropTypes.func
  };

  constructor() {
    super();

    this.state = {
      // cards: props.cards
      cards: [],
    };
  }

  componentDidMount() {
    // this.props.updateStatusCallback('Loading cards...', 'success')
    axios.get(Cards_URL)
    .then((response) => {
      console.log("success");
      console.log(response);
      // this.setState({ cards: response.data });
      this.props.updateStatusCallback('Successfully load cards...', 'success')
      const cards = response.data
      this.setState({ cards: cards });
    })
    .catch((error) => {
      console.log("Error: (')");
      console.log("error");
      // this.setState({ error: error.message });
      this.props.updateStatusCallback(error.message, 'error')

    });
  }


  addCard = (card) => {
    let updatedCards = this.state.cards
    updatedCards.push(card);

    this.setState({cards: updatedCards})
  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      return <Card key={index}
      text={card.card.text}
      emoji={card.card.emoji} />
    });
    return (
      <div className="board">
      <NewCardForm addCardCallback={this.addCard}/>

      {cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
