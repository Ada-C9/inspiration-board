import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import Foundation,{Callout,Colors} from 'react-foundation';


class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/<Abinnet-Ainalem>/cards')
    .then ((response) => {
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

  removeCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/boards/<Abinnet-Ainalem>/cards${cardId}`)
    .then ((response) => {
      this.setState({
        message: response.status
      })
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  showCards = () => {
    console.log('this state cards');
    console.log(this.state.cards);
    const list = this.state.cards.map((card, index) => {
      console.log(`this is card with index ${index}`);
      console.log(card);
      return (
        <Card
          key={index}
          quote={card.card.text}
          emoji={card.card.emoji}
        />
      );
    });
    console.log(list);
    return list
  }


  render() {
    return (
      <div className="board">
        <div className="callout-colors-example">
          <Callout color={Colors.WARNING}>
          <h5>{this.state.error}</h5>
          </Callout>
          <Callout color={Colors.WARNING}>
          <h5>{this.state.message}</h5>
          </Callout>
        </div>
        {this.showCards()}
      </div>
    )
  }

}

Board.propTypes = {
};

export default Board;
