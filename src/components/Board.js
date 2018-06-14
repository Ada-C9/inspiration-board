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

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then( (response) => {
      console.log( response.data );
      this.setState({
        cards: response.data
      });
    } )
    .catch( (error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    } );

    // const cards = []
    // this.setState({
    //   cards: CARD_DATA
    // });
  }

deleteCard = (id) =>{
  URL = `${this.props.url}${this.props.boardName}/cards/${id}`
  let cards = this.state.cards;
  console.log(URL)
  axios.delete(URL)
  .then((response)=> {
    cards = cards.filter(card => card.card.id !== id);
    this.setState({
      cards,
      message: `Successfully Deleted ${id}`
    })
  })
  .catch ((error) => {
    this.setState({
      message: error.message,
    });
  });
}
  render() {
    const cardRenders = this.state.cards.map((card, index) => {
      return (
        <Card
        key={index}
        id= {card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        deleteCardCallback={this.deleteCard}
        />
      )
    })
    return (
      <div className="board">
      {cardRenders}
      </div>
    )
  }
}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Board;
