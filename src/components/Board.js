import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const CARDS = `https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards`;

class Board extends Component {

  static propTypes = {
    updateStatusCallback: PropTypes.func.isRequired,
    boardName: PropTypes.string.isRequired
  };

  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback('Loading cards...', 'success');

    axios.get(CARDS)
    .then((response) => {
      console.log('Success!');
      console.log(response);

      this.setState({ cards: response.data });

      this.props.updateStatusCallback('Successfully loaded!', 'SUCCESS')
    })
    .catch((error) => {
      console.log('Error!');
      console.log(error);

      this.props.updateStatusCallback(error.message, 'error');
    });
  }

  addCard = (card) => {
      console.log(card);

      axios.post(CARDS, card)
        .then((response) => {
          console.log(response);
          this.props.updateStatusCallback(`Successfully added new card: '${ card.text }'!`, 'success');

          let updatedCards = this.state.cards;
          updatedCards.unshift(response.data);

          this.setState({ cards: updatedCards });
        })
        .catch((error) => {
          this.props.updateStatusCallback(`Error adding card with '${ card.text }' to the board.`, 'error')
        });
    }

  deleteCard = (id) => {
    console.log(id);
    axios.delete(CARDS + `/${id}`)
      .then((response) => {
        this.props.updateStatusCallback('Successfully deleted!')

        let updatedCards = this.state.cards


        let index = updatedCards.findIndex((card) => {
          console.log(card.card.id);
          return card.card.id === id;
        });

        updatedCards.splice(index, 1)

        this.setState({ cards: updatedCards })

      })
      .catch((error) => {
        console.log('Error - Delete!');
      })
  }

  render() {
    console.log(this.state.cards);
    const cardsList = this.state.cards.map((card, index) => {
      return <Card
        key={index}
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        deleteCardCallback={this.deleteCard}
      />
  });

    return (
      <section>
        <NewCardForm addCardCallback={this.addCard} />
        <div className="board">
          {cardsList}
        </div>
      </section>
    );
  }

}

export default Board;
