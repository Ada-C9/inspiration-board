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
    console.log('Component did mount was called');

    axios.get('https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards')
    .then( (response) => {
      console.log( response.data );
      this.setState({
        cards: response.data
      });
    } )
    .catch( (error) => {
      console.log("Error");
      console.log(error);
      this.setState({
        error: error.message
      });
    } );
  }


  renderBoardCards = () => {
    console.log('Rendering Board');
    const boardCards = this.state.cards.map((card, index) => {
      return (
        <Card
        key={index}
        text={card.card.text}
        emoji={card.card.emoji}
        />
      );
    });
    return boardCards;
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
  cards: PropTypes.array.isRequired
};

export default Board;
