import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

import '../styles/Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


const ALL_CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/papaya/cards'
const BASE_URL = 'https://inspiration-board.herokuapp.com/boards/'

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
    console.log(response.data);
    this.props.updateStatusCallback(`Successfully loaded cards`)
    this.setState({cards: response.data})
  })
  .catch((error)=>{
    this.props.updateStatusCallback(error.message, 'error')
  })

}

addCard = (card) => {
  axios.post(ALL_CARDS_URL, card)
  .then((response)=>{
    this.props.updateStatusCallback(`Successfully posted card`)

    let updatedCards = this.state.cards;
    updatedCards.push(response.data);
    this.setState({cards: updatedCards})
  })
  .catch((error)=>{
    this.props.updateStatusCallback(error.message, 'error')
  })
}

// put delete requst in here
deleteCard = (index, id) => {


  let DELETE_URL = BASE_URL + `papaya/cards/${id}`

  axios.delete(DELETE_URL)
  .then((response) =>{
    this.props.updateStatusCallback(`Successfully deleted card`)
    // this.forceUpdate();
    let updatedCards = this.state.cards;
    updatedCards.splice(index, 1);
    this.setState({cards: updatedCards})
  })
  .catch((error)=>{
    this.props.updateStatusCallback(error.message, 'error')
  })
}


// parse cards collection from state into card components
  render() {
    const cards = this.state.cards.map((card, index) => {
      // console.log(index);
      return <Card key={index} index={index}
      id={card.card.id}
      text={card.card.text}
      emoji={card.card.emoji}
      deleteCallBack={this.deleteCard}
       />
    })
    return (
      <section>
        <NewCardForm addCallBack={this.addCard} />
        <section className="board">
          {cards}
        </section>
      </section>
    )
  }

}
// end of class

Board.propTypes = {

};

export default Board;
