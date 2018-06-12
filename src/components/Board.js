import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

import '../styles/Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


const ALL_CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/majapapaya/cards'
// https://inspiration-board.herokuapp.com/boards/:board_name/cards/:card_id

class Board extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

// lives in component lifecycle and gets called when component mounts?
componentDidMount(){
  axios.get(ALL_CARDS_URL)
  .then((response) =>{
    this.props.updateStatusCallback(`Successfully loaded cards`)
    console.log(response.data);
    this.setState({cards: response.data})
  })
  .catch((error)=>{
    this.props.updateStatusCallback(error.message, 'error')
  })

}

// put delete requst in here
deleteCard = (index) => {
  let updatedCards = this.state.cards;
  updatedCards.splice(index, 1);
  this.setState({cards: updatedCards})

}

componentDidUpdate(){
  axios.post()
}


// parse cards collection from state into card components

  render() {
    const cards = this.state.cards.map((card, index) => {
      return <Card key={index} text={card.card.text} emoji={card.card.emoji} boardCallBack={this.deleteCard} />
    })
    return (
      <section className="board">
        {cards}
      </section>
    )
  }

}
// end of class

Board.propTypes = {

};

export default Board;
