import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const URL = 'https://inspiration-board.herokuapp.com/boards/alexandriahh/cards/'

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    axios.get(URL)
      .then((response) => {
        this.setState({
          cards: response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      });
  }

  deleteCard = (cardId) => {
    axios.delete(URL + cardId)
      .then((response) => {
        let cards = this.state.cards
        let updatedCards = cards.filter(function(i) {
          return i !== response.data;
        });
        console.log(cards);
        console.log(response.data);
        console.log(updatedCards);
        this.setState({
          cards: updatedCards
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      });
  }

  addCard = (card) => {
    axios.post(URL, card)
      .then((response) => {
        let updatedCards = this.state.cards;
        updatedCards.push({'card': card});
        this.setState({
          cards: updatedCards,
          message: 'Card successfully added!'
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      })

  }

  renderCardList = () => {
    const cardList = this.state.cards.map((card) => {
      return (
        <Card
          key={card.card.id}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          deleteCardCallback={this.deleteCard}
        />
      );
    });
    return cardList;
  }

  render() {
    return (
      <section>
        <div>
          <NewCardForm addCardCallback={this.addCard}/>
        </div>
        <div className="board">
          {this.renderCardList()}
        </div>
      </section>
    )
  }

}

export default Board;
