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

  showCards = () => {
    const list = this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          quote={card.text}
          emoji={card.emoji}
        />
      );
    });
    return list
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


  render() {
    console.log(this.state.cards);

    return (
      <div>
        <div className="callout-colors-example">
          <Callout color={Colors.WARNING}>
          <h5>{this.state.error}</h5>
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
