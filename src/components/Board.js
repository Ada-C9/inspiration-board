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



  renderCardList = () => {
      const componentList = this.props.cardList.map((card, index) => {
        return (
          <Card
           key={index}
           text={card.text}
           emoji={card.emoji}
          />
        );
      });
      return componentList;
  }

  render() {
    return (
      <div>
        Board
        {this.renderCardList()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
  // {this.renderBoardList()}
