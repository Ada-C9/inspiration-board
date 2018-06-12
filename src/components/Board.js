import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards'

class Board extends Component {
  constructor(props) {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback("loading cards...", "success");
    axios.get(CARDS_URL)
    .then((response) => {
      console.log(response.data)
      this.setState({ cards: response.data });
      console.log(this.state)

      this.props.updateStatusCallback("successfully loaded cards", "success");
    })

    .catch((error) => {
      this.setState({ error: error.message });

      this.props.updateStatusCallback(error.message, 'error');

    this.setState({
      status: {
        message: `Failed to load cards: ${error.message}`,
        type: 'error'
      }
    })

    });
  }

  render() {
    console.log(this.state.cards)
    const cards = this.state.cards.map((card, index) => {
      console.log(card.card);
      return(
        <Card key={index}
        text={card.card.text}
        emoji={card.card.emoji}
        />
    )
    });

    return (
      <div>
        {console.log(cards)}
        { cards }
      </div>
    )
  }

}

Board.propTypes = {
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
