import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import './Card.css';
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

  removeCard = (cardIndex) => {
    const deletedCardId = this.state.cards[cardIndex].card.id;

    axios.delete(`https://inspiration-board.herokuapp.com/boards/<Abinnet-Ainalem>/cards/${deletedCardId}`)

    .then ((response) => {
      this.state.cards.splice(cardIndex,1);
      this.setState({
        message: `Deleted card`,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  showCards = () => {
    const list = this.state.cards.map((card, index) => {
      return (
        <div key={index + 1}>
          <Card
            quote={card.card.text}
            emoji={card.card.emoji}
            removeCard={this.removeCard}
            index={index}
          />
        </div>
      );
    });
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
  cards: PropTypes.array
};

export default Board;
