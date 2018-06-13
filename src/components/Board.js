import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        const cards = this.state.cards;
        response.data.forEach((card) => {
          const newCard = {};
          newCard.id = card.card.id;
          newCard.text = card.card.text;
          newCard.emoji = card.card.emoji;
          cards.push(newCard);
        })

        this.setState({ cards })
      })
      .catch((error) => {
        this.setState({ error: error.message})
      });
  }

  renderCardComponents = () => {
    const cards = this.state.cards.map((card, index) => {
      return(
        <Card
          key={index}
          text={card.text}
          emoji={card.emoji}
        />
      )
    })
    return cards;
  }

  render() {
    return (
      <div className="board">
        <NewCardForm />
        { this.renderCardComponents() }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
