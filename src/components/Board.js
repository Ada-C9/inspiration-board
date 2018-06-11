import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  static PropTypes = {
    url: PropTypes.string.isRequired,
    boardName: PropTypes.string.isRequired
  }

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      console.log(response.data);
      const cards = response.data;
      this.setState({ cards: cards });
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  render() {
    const cards = this.state.cards.map((note, index) =>{
      return <Card key={index}
      text={note.card.text}
      emoji={note.card.emoji} />
    });

    return (
      <div>
        Board: {this.props.boardName}
        {cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
