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

  componentDidMount = () => {
    // console.log("Component did mount was called");
    axios.get('https://inspiration-board.herokuapp.com/boards/nora/cards')
    .then((response) => {
      console.log(response.data);
      this.setState({cards: response.data});
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  addCard = (card) => {
    const cards = this.state.cards;
    console.log(this.state.cards);

    axios.post('https://inspiration-board.herokuapp.com/boards/nora/cards', card)
    .then((response) => {
      console.log(response);
      card.id = response.data.card.id;
      cards.push({card: card});
      this.setState({
        cards,
        message: `Successfully added card`
      });
      alert( `Successfully added card`)
    })
    .catch((error) => {
      this.setState({
        message: error.message,
      });
    });
  }

  renderCardList = () => {
    const cardList = this.state.cards.map((item, index) => {
      // console.log(item);
      return (
        <Card
          key={index}
          id={item.card.id}
          text={item.card.text}
          emoji={item.card.emoji}
          removeCard={this.removeCard}
        />
      );
    });
    return cardList;
  }

  removeCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/boards/nora/cards/${id}`)
    .then((response) => {
      // console.log(response.data);
      this.componentDidMount();
    })
    .catch((error) => {
      console.log(error);
      this.setState({error: error.message});
    });
  }

  render() {
    return (
      <div className="board">
        {this.renderCardList()}
        <NewCardForm addCardCallback={this.addCard}/>
      </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
