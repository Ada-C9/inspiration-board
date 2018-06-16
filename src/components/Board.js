import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const URL = 'https://inspiration-board.herokuapp.com/boards/alexandriax/cards/'

class Board extends Component {
  constructor() {
    super();

    this.state = { cards: [] };
  }

  componentDidMount = () => {
    axios.get(URL)
      .then((response) => {
        this.setState({ cards: response.data })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      });
  }

  updateCallback = () => {
    this.props.notificationCallback(this.state);
  }

  deleteCard = (cardId) => {
    axios.delete(URL + cardId)
      .then((response) => {
        console.log(response.data.card.id);
        let cards = this.state.cards
        let updatedCards = cards.filter(function(i) {
          return i.card.id !== response.data.card.id;
        });
        this.setState({
          cards: updatedCards,
          message: 'Card successfully deleted.'
        });
        this.updateCallback();
      })
      .catch((error) => {
        this.setState({ error: error.message })
        this.updateCallback();
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
        this.updateCallback();
      })
      .catch((error) => {
        this.setState({ error: error.message });
        this.updateCallback();
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
