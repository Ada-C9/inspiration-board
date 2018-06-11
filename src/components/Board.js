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

    this.state = CARD_DATA
    ;
  }


  render() {

    const cardComponents = this.state.cards.map((card, index)  =>
  {
    return <Card text={card.text} emoji={card.emoji} key={ index }/>
  })
    return (
      <div>
        {cardComponents}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
