import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import Status from './Status';

class Board extends Component {

  constructor() {
    super();

    this.state = {
      cards: [],
      status: {
        message: '',
        type: ''
      }
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardname}/cards`)
      .then((response) => {
        this.setState({ cards: response.data });
      })

      .catch((error) => {
        this.setState({
          status: {
            message: `Failed to load messages: ${error.message}`,
            type: 'error'
          }
        })
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
        <Status
          message={this.state.status.message}
          type={this.state.status.type}
        />
        { cards }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
