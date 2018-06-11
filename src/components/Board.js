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


  componentDidMount = () => {
    // console.log('Component did mount was called');

    // axios.get('').then().catch();
    axios.get('https://inspiration-board.herokuapp.com/boards/leti/cards')
      .then( (response) => {
        console.log(response); //to see how the data looks like and decide what we want.
        this.setState({
          cards: response.data
        });
      })
      .catch( (error) => {
        this.setState({
          error: error.message
        })
      });
  }

  renderCardList = () => {
    console.log(`this.state.cards = ${this.state.cards}`)
      const componentList = this.state.cards.map((card, index) => {
        console.log(card.card.text)
        return (
          <Card
           key={index}
           text={card.card.text}
           emoji={card.card.emoji}
          />
        );
      });
      return componentList;
    }

  render() {
    return (
      <section className="board">
        {this.renderCardList()}
      </section >
    )
  }

}

Board.propTypes = {

};

export default Board;
  // {this.renderBoardList()}
