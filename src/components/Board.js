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

  addCard = (aCard) => {
    const cards = this.state.cards;
    let newCardID = cards.length + 1;
    axios.post('https://inspiration-board.herokuapp.com/boards/sainalem/cards',aCard)
    .then(() => {
        cards.push({card:{id:newCardID, text:aCard.text, emoji:aCard.emoji}})
        console.log(cards)
        this.setState({
          cards,
          message: 'New card has been added'
        });
    })
    .catch((error) => {
      // cards.push(card)
      // console.log(cards)
      // console.log(error)
      // this.setState({
      //   message:error.message,
      // });
    });

  }

  deleteMessage = (messageID) => {
      axios.delete(`https://inspiration-board.herokuapp.com/boards/sainalem/cards/${messageID}`)
        .then(() => {
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
            this.setState({
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
        <NewCardForm addCardcallBack={this.addCard}/>
        {this.renderCommentList()}
      </div>
    )
  }

}


export default Board;
