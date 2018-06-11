import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const CARDS_URL = "https://inspiration-board.herokuapp.com/boards/Luxi-Lindsey/cards";

class Board extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
  };

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    console.log('In componentsDidMount');

    // this.props.updateStatusCallback('Loading...', 'success');

    axios.get(CARDS_URL)
    .then((response) => {
      console.log('Success!');
      console.log(response.data);

      // this.props.updateStatusCallback('Successfully loaded pets!', 'success');

      const cards = response.data;
      this.setState({ cards: cards });
    })
    .catch((error) => {
      console.log('Error :(');
      console.log(error);

      // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  render() {

    const cards = this.state.cards.map((card, index) => {
      console.log(card)
      return <Card key={index}
        text={card.card.text}
        emoji={card.card.emoji} />
    });

    return (
      <div className="board">
        { cards }
      </div>
    );
  }

}

Board.propTypes = {

};

export default Board;
