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
    // console.log('Component did mount was called');
    // axios.get('').then().catch();
    axios.get('https://inspiration-board.herokuapp.com/boards/leti/cards')
    .then( (response) => {
      console.log(response); //to see how the data looks like and decide what we want.
      this.setState({
        cards: response.data
      });
    })
    .catch( (error) => {
      this.setState({
        error: error.message
      })
    });
  }

  renderCardList = () => {
    // console.log(`this.state.cards = ${this.state.cards}`)
    const componentList = this.state.cards.map((element, index) => {
      if(element.card !== undefined) {
        // TODO: Fix this.... there is two undefined 'things' in the list... wtf? 
        // console.log(element.card)
        // this.deleteCard(element.card.id, index)

      console.log(element.card.text)
      return (
        <Card
        key={index}
        index={index}
        id={element.card.id}
        text={element.card.text}
        emoji={element.card.emoji}
        deleteCardCallback={this.deleteCard}
        />
      );
      }
    });
    return componentList;
  }

  deleteCard = (id, index) => {
    let url = 'https://inspiration-board.herokuapp.com/boards/leti/cards/'+id
    console.log(id);
    axios.delete(url)
    .then((response) => {
      console.log(response);
      const updatedCards = this.state.cards
      delete updatedCards[index]
      this.setState({
        cards: updatedCards,
      })
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
      if (error.message) {
        // this.renderError();
        console.log(error.message);
      }
    });
  }

  addCard = (card) => {
    const cards = this.state.cards;

      cards.push(card);
      this.setState({
        cards,
      });
      axios.post('https://inspiration-board.herokuapp.com/boards/leti/cards/', card)
      .then(() => {
        // card successfully added
        cards.push(card);
        this.setState({
          cards,
          message: `Successfully Added Card`
        });
      })
      .catch((error) => {
        // not successfull
        this.setState({
          message: error.message,
        });

      })
  }


  render() {
    return (
      <section >
      <div className="form"><NewCardForm addCardCallBack={this.addCard}/></div>
      <div className="board">{this.renderCardList()}</div >
      </section >
    )
  }

}

Board.propTypes = {

};

export default Board;
