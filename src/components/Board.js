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
    const cards = []
    this.setState({
      cards: CARD_DATA.cards
    });
  }


  render() {
    if (this.state.cards.length > 0) {
      return (
        <div>
        <Card text={this.state.cards[1].text} emoji={this.state.cards[1].emoji} />
        </div>
      )
    }
    else
    return null
  }

}

Board.propTypes = {

};

export default Board;
