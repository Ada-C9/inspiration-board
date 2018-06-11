import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    console.log(`${this.props.url}${this.props.boardName}/cards`);
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        console.log(response.data);
        this.setState({ cards: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderCards = () => {
    const cardList = this.state.cards.map( (card, index) => {
      return(
        <Card
          key = { index }
          text = { card.card.text }
          emoji = { card.card.emoji }
        />
      );
    });

    return cardList;
  }

  render() {
    return (
      <div className = "board">
        { this.renderCards() }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
