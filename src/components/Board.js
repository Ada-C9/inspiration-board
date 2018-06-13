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
      boardURL: 'https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards'
    };
  }

  componentDidMount = () => {
    console.log('Component did mount was called');

    axios.get(`${this.state.boardURL}`)
    .then( (response) => {
      console.log( response.data );
      this.setState({
        cards: response.data
      });
    })
    .catch( (error) => {
      console.log("Get error");
      console.log(error);
      this.setState({
        error: error.message
      });
    });
  }


  renderBoardCards = () => {
    console.log('Rendering Board');
    const boardCards = this.state.cards.map((card, index) => {
      return (
        <Card
        key={index}
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        deleteCard={this.deleteCard}
        />
      );
    });
    return boardCards;
  }


  deleteCard = (id) => {

    console.log(id)

    axios.delete(`https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards${id}`)
    .then((response) => {
      this.componentDidMount();
      console.log(response)
      console.log(response.data)
    })
    .catch( (error) => {
      console.log("Delete error");
      console.log(error);
      this.setState({
        error: error.message
      });
    });
  }

  render() {
    return (
      <section>
      <header>
      {this.state.message ? this.state.message: ""  }
      </header>
      <div>
      {this.renderBoardCards()}
      </div>
      </section>
    )
  }

}

Board.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Board;
