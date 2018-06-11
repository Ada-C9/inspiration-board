import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  }

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then((response) => {
      console.log("response.data");
      console.log(response.data);
      const cards =  response.data
      this.setState({ cards: cards });

    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {

    const cards = this.state.cards.map((message, index) => {
      return <Card key={index}
         text={message.card.text}
         emoji={message.card.emoji} />
       })

    return (
      <div className="board">
        Board
        { cards }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
