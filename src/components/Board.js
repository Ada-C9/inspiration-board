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
  deleteMessage = (messageID) => {
      axios.delete(`https://inspiration-board.herokuapp.com/boards/sainalem/cards/${messageID}`)
        .then((response) => {
          let counter = 0
            this.state.cards.forEach((aCard) => {
              if (aCard.card.id === messageID){
                this.state.cards.splice(counter,1)
                    this.setState({
                      cards:this.state.cards
                    })
                }
            counter = counter + 1;
            });
        })
        .catch((error) => {
            this.setsState({
              error: error.message
            })
        });
  }
  componentDidMount = () => {
    console.log('Component did mount');
    axios.get('https://inspiration-board.herokuapp.com/boards/sainalem/cards')
      .then((response) => {
        this.setState({
          cards:response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      });
  }

  renderCommentList = () => {
  const componentList = this.state.cards.map((card,index) => {

    return (
      <Card
          key={index}
          text={card.card.text}
          emoji={card.card.emoji}
          deleteCard={this.deleteMessage}
          id={card.card.id}
        />
    );
  });
  return componentList
}

  render() {
    return (
      <div className="board">
        {this.renderCommentList()}
      </div>
    )
  }

}


export default Board;
