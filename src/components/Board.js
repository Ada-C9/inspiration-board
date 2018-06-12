import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARDS_URL = 'https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(BOARDS_URL)
    .then((response)=> {
      console.log("waz happnin");
      console.log(response);

      const data = response.data.slice(0,100);
      this.setState({cards: data})
    })
    .catch((error) => {
      this.setState({ error: error.message})
    })
  }

  render() {
    console.log("I'm inside!");

    const attrCards = this.state.cards
    // const attr_cards = CARD_DATA["cards"]

    const cards = attrCards.map((cardInfo, index) => {
      console.log("inside card mapping");
      return <Card key={index} text={cardInfo.card.text} emoji={cardInfo.card.emoji} />
    });

    return (
      <div>
      Board

      { cards }

      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
