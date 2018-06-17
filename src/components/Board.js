import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import emoji from 'emoji-dictionary';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
    .then( (response) => {
      this.setState({
        cards: response.data
      });
    })
    .catch( (error) => {
      this.setState({
        error: error.message
      });
    });
  }

  addCard = (card) => {

    axios.post(`${this.props.url}/${this.props.boardName}/cards?text=${card.text}&emoji=${card.emoji}`)
    .then( (response) => {
      card.id = response.data.card.id
      this.state.cards.push(card)
      this.setState({
        cards: this.state.cards,
        message: `New Card Added!`
      })
    })
    .catch( (error) => {
      this.setState({
        error: error.message
      });
    });
  }

  deleteCard = (id) => {
    axios.delete(`${this.props.url}/${this.props.boardName}/cards/${id}`)
    .then( (response) => {
      this.componentDidMount()
    })
    .catch( (error) => {
      this.setState({
        error: error.message
      });
    });
  }

  renderCards = () => {
    const cardList = this.state.cards.map((card, index) => {
      let someCard = card.card ? card.card : card
      return (

        <Card
        key={index}
        id={someCard.id}
        text={someCard.text}
        emoji={someCard.emoji}
        deleteCardCallback={this.deleteCard}
        />
      );
    });

    return cardList
  }

  render() {

    const anyErrors = () => {
    if (this.state.error) {
      return <p>{this.state.error}</p>
    }
  }

    return (
      <section>
        <header>{this.state.message ? this.state.message: ""}</header>
        {anyErrors()}
        <NewCardForm addCardCallback={this.addCard} />
        <div className='board'>
          {this.renderCards()}
        </div>
      </section>
    )
  }

}


export default Board;
