import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const URL = 'https://inspiration-board.herokuapp.com/boards/alexandriac/cards/'

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

  deleteCard = (cardIndex) => {
    axios.delete(URL + cardIndex)
      .then((response) => {
        let cards = this.state.cards
        let updatedCards = cards.filter(card => card !== response.data);
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
          <NewCardForm/>
        </div>
        <div className="board">
          {this.renderCardList()}
        </div>
      </section>
    )
  }

}

Board.propTypes = {

};

export default Board;
