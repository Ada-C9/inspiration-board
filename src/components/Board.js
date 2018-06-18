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


  componentDidMount= () => {
    console.log('Component did mount');

    axios.get('https://inspiration-board.herokuapp.com/boards/steffany/cards')
      .then( (response) => {
        console.log(response.data);
        this.setState({
          cards: response.data
        });
      })
      .catch( (error) => {
        this.setState({
          error: error.message,
        });
      });
  }


  deleteCard = (id, key) => {
    console.log(id);
    axios.delete(`https://inspiration-board.herokuapp.com/boards/steffany/cards/${id}`)
      .then( (response) => {
        console.log(response);
      })

    let cardArray = this.state.cards
    cardArray.splice(key, 1)

    this.setState({
      cards: cardArray
    });
  }

  addCard = (cardInfo) => {
    console.log(cardInfo)
   axios.post('https://inspiration-board.herokuapp.com/boards/steffany/cards', cardInfo)
     .then((response) => {

       this.componentDidMount()
     })
     .catch((error) => {
       this.setState({ error: error.message });
     });
  }

  renderCardList = () => {
  console.log('Rendering Card List')
  const cardList = this.state.cards.map((card, index) => {
    return (
      <Card
        id={card.card.id}
        key={index}
        text={card.card.text}
        emoji={card.card.emoji}
        deleteThisCard={this.deleteCard}
      />
    )
  })
  console.log(cardList)
  return cardList;
}

  render() {
    return (
      <div className="board">
        {this.renderCardList()}
        <NewCardForm addCardCallback={this.addCard}/>
      </div>

    )
  }

}

Board.propTypes = {

};

export default Board;
