import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    console.log('Component did mount was called')

    axios.get('https://inspiration-board.herokuapp.com/boards/angelap/cards')
    .then((response) => {
      this.setState({ cards: response.data });
      console.log(response.data)
    })
    .catch((error) => {
      console.log('Error is happening');
      console.log(error);
      this.setState({ error: error.message});
      return error;

    });
  }

  renderCards = () => {
    console.log('Rendering cards')
    const cardList = this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          text={card["card"].text}
          emoji={card["card"].emoji}
          />
      );
    });
    return cardList;
  }

  deleteCard = (card) => {
    const cards = this.state.cards;

    cards.delete(card);
    this.setState({
      cards,
    });
  }

  render() {
    return (
      <div>
        <section className="board">
          {this.renderCards()}
        </section>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
