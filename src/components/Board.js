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
        this.setState({ message: error.message})
      });
  }

  createNewCard = (newCardData) => {
    const cards = this.state.cards
    axios.post(`${this.props.url}${this.props.boardName}/cards`, newCardData)
      .then((response) => {
        console.log(response.data.card);
        cards.push(response.data.card);
        this.setState({
          cards,
          message: `Sucessfully created Card ${response.data.card.id}`
        })
      })
      .catch((error) => {
        this.setState({ message: error.message})
      });
  };

  deleteCard = (id, index) => {
    const cards = this.state.cards
    axios.delete(`${this.props.url}${this.props.boardName}/cards/${id}`)
      .then((response) => {
        cards.splice(index, 1)
        this.setState({
          cards,
          message: `Sucessfully deleted Card ${response.data.card.id}`
        })
      })
      .catch((error) => {
        this.setState({ message: error.message})
      });
  };

  render() {
    const cardComponents = this.state.cards.map((card, index) => {
      return<Card
        key={index}
        index={index}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
        deleteCard={ this.deleteCard }
      />;
    });

    return (
      <div>
        <div>
          <NewCardForm submitNewCard={ this.createNewCard }/>
        </div>
        <div className="board">
          { cardComponents }
        </div>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
