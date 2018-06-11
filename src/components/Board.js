import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


class Board extends Component {
  static propTypes = {
    boardName: PropTypes.string.boardName
  };

  constructor(props) {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    const BOARD_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(BOARD_URL)
    .then((response) => {
      console.log(response);
      const cards = response.data.slice(0, 100);
      this.setState({
        cards: cards
      });
    })
    .catch((error) => {
      console.log(error);
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
