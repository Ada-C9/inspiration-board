import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


class Board extends Component {
  static propTypes = {
    boardName: PropTypes.string.isRequired,
    updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback(`Loading cards for ${this.props.boardName}`, 'success');

    const BOARD_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(BOARD_URL)
    .then((response) => {
      console.log(response);
      this.props.updateStatusCallback(`Successfully loaded cards for ${this.props.boardName}`, 'success');
      const cardData = response.data.slice(0, 100);
      this.setState({
        cards: cardData
      });
    })
    .catch((error) => {
      console.log(error);
      this.props.updateStatusCallback(`There was a problem loading cards: ${error.message}`, 'error');
    })
  }

  render() {
    const cards = this.state.cards.map((cardInfo, index) => {
      return <Card
        key={index}
        text={cardInfo.card.text}
        emoji={cardInfo.card.emoji}
      />
    });
    return (
      <section className="board">
        { cards }
      </section>
    )
  }

}

Board.propTypes = {

};

export default Board;
