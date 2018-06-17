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
  componentDidMount = () => {
    console.log('Component did mount');
    axios.get('https://inspiration-board.herokuapp.com/boards/Aruna/cards')
    .then((response) => {
      console.log(response.data);
      this.setState({
        cards: response.data
      });

    })
    .catch((error) => {
      this.setState({
        error: error.message
      })

    });
  }
  removeCard = (id) => {
    let cards = this.state.cards;
    axios.delete(`https://inspiration-board.herokuapp.com/boards/:board_name/cards/${id}`)
    .then((response) => {
      cards = cards.filter(card =>card.card.id!=id);
      this.setState({
        cards,
        error:'Card was deleted successfully',
      });
    })
    .catch( (error) => {
      this.setState({ error: error.message });
    });
  }
  renderCards = () => {
    const componentList = this.state.cards.map((card,index) => {
      return(
        <Card
          key={index}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          removeCard={this.removeCard}
          />
      );
    });
    return componentList;
  }

  addCard = (card) => {
    const cards = this.state.cards;
    const newCard = {'card': card};
  axios.post('https://inspiration-board.herokuapp.com/boards/Aruna/cards', card)
      .then((response) => {
        cards.push(newCard);
        this.setState({
          cards,
          error: 'New card was added successfully'
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }
  renderError = () =>{
    if(this.state.error){
      return(
        <p>{this.state.error}</p>
      )
    }
  }


  render() {
    return (
      <div className="board">
      <NewCardForm addCardCallback={this.addCard}/>
        <div className="cards">{this.renderCards()}</div>
        <div className="validation-errors-display-list">{this.renderError()}</div>

      </div>
    )
  }

}

Board.propTypes = {


};

export default Board;
