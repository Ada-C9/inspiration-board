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
      boardName: null
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback(`Loading board: ${this.props.boardName}`, 'success');
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        this.props.updateStatusCallback(`Board "${this.props.boardName}" successfully loaded` , 'success');
        this.setState({
          cards: response.data,
          boardName: this.props.boardName
        });
      })

      .catch((error) => {
        this.props.updateStatusCallback(error.message, 'error');
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // debugger
    if(prevProps.boardName !== this.props.boardName) {
      this.props.updateStatusCallback(`Loading board: ${this.props.boardName}`, 'success');
      axios.get(`${this.props.url}${this.props.boardName}/cards`)
        .then((response) => {
          this.props.updateStatusCallback(`Board "${this.props.boardName}" successfully loaded` , 'success');
          this.setState({
            cards: response.data,
            boardName: this.props.boardName
          });
        })

      .catch((error) => {
        this.props.updateStatusCallback(error.message, 'error');
      });
    }
  }

  addCard = (newCard) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`, newCard)
    .then((response) => {
      this.props.updateStatusCallback('New card successfully added', 'success');

      let updatedCards = this.state.cards;
      updatedCards.push({
        card: response.data.card
      });

      this.setState({
        cards: updatedCards
      });
    })
    .catch((error) => {
      this.props.updateStatusCallback('Card could not be added', 'error');
    });
  }

  deleteCard = (id) => {
    axios.delete(`${this.props.url}${this.props.boardName}/cards/${id}`)
      .then(() => {
        let updatedCards = this.state.cards;
        updatedCards.splice(id, 1);
        this.setState({
          cards: updatedCards
        });
        window.location.reload();
      })
      .catch((error) => {
        this.props.updateStatusCallback(`Card could not be deleted: ${error.message}`, 'error');
      });
  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      return (
        <div>
          <Card
          key={index}
          id={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
          deleteCardCallback={this.deleteCard}
          />
        </div>
      );
    });

    return (
      <div className='board'>
        { cards }
        <NewCardForm addCardCallback={this.addCard}/>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
