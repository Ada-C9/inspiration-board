import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const CARDS = 'https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards';

class Board extends Component {

  static propTypes = {
    // updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    // this.props.updateStatusCallback('Loading cards...', 'success');
    axios.get(CARDS)

    .then((response) => {
      console.log('Success!');
      console.log(response);

      this.setState({ cards: response.data });

      // this.props.updateStatusCallback('Successfully loaded!', 'SUCCESS')
    })
    .catch((error) => {
      console.log('Error!');
      console.log(error);

      // this.props.updateStatusCallback(error.message, 'error');
    });
  }

  render() {
    console.log(this.state.cards);
    const cardsList = this.state.cards.map((card, index) => {
      return <Card
        key={index}
        text={card.card.text}
        emoji={card.card.emoji}
      />
  });

    return (
      <div>
        {cardsList}
      </div>
    );
  }

}

export default Board;
