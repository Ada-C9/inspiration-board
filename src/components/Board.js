import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const URL = 'https://inspiration-board.herokuapp.com/boards/alexandria/cards/'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    axios.get(URL)
      .then((response) => {
        this.setState({
          cards: response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      });
  }

  deleteCard = (cardIndex) => {
    axios.delete(URL + cardIndex)
      .then((response) => {
        this.setState({
          cards: 
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      });
  }

  renderCardList = () => {
    const cardList = this.state.cards.map((card) => {
      return (
        <Card
          key={card.card.id}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          deleteCardCallback={this.deleteCard}
        />
      );
    });
    return cardList;
  }

  render() {
    return (
      <div className="board">
        {this.renderCardList()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
