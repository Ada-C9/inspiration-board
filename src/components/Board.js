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
    this.props.updateStatusCallback('Loading the board...', 'success');
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        this.props.updateStatusCallback('Board successfully loaded', 'success');
        this.setState({ cards: response.data });
      })

      .catch((error) => {
        this.props.updateStatusCallback(error.message, 'error');
      });
  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      return (
        <Card
        key={index}
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        />
      );
    });

    return (
      <div>
        { cards }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
