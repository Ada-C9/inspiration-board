import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import Dropdown from './Dropdown'
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      boardName: 'phoebe'
    };
  }

  componentDidMount = () => {
    axios.get(`${this.props.url}${this.state.boardName}/cards`)
      .then( (response) => {
        console.log(response.data);
        this.setState({ cards: response.data });
      })
      .catch( (error) => {
        // console.log(error);
      });
  }

  deleteCardRequest = (id) => {
    axios.delete(`${this.props.url}${this.state.boardName}/cards/${id}`)
      .then( (response) => {
        console.log(response);
        this.deleteCardFromState(id);
      })
      .catch( (error) => {
        console.log(error.message);
        this.setState({ message: error.message });
      });
  }

  deleteCardFromState = (id) => {
    const allCards = this.state.cards;
    const tempCards = this.state.cards;
    tempCards.splice(allCards.findIndex(card => card.card.id === id), 1);
    this.setState({
      cards: tempCards,
      message: "Card Deleted"
    });
  }

  addCardRequest = (card) => {
    axios.post(`${this.props.url}${this.state.boardName}/cards/`, card)
      .then( (response) => {
        console.log(response.data);
        this.addCardToState(response.data);
      })
      .catch( (error)=> {
        console.log(error.message);
        this.setState({ message: error.message });
      })
  }

  addCardToState = (card) => {
    const allCards = this.state.cards;
    allCards.unshift(card);
    this.setState({
      cards: allCards,
      message: "Card Added"
    });
  }

  renderCards = () => {
    const cardList = this.state.cards.map( (card, index) => {
      return(
        <Card
          key = { index }
          id = { card.card.id }
          text = { card.card.text }
          emoji = { card.card.emoji }
          deleteCardCallback = { this.deleteCardRequest }
        />
      );
    });
    return cardList;
  }

  getName = (name) => {
    this.setState({
      boardName: name
    });
    console.log(`Boardname: ${name}`);
  }

  render() {
    return (
      <div>
        <div className = "board-dropdown">
          <Dropdown
            getName = { this.getName }
          />
          <p>Board: { this.state.boardName }</p>
        </div>

        <header className = "validation-errors-display">
          <p className = "validation-errors-display__list">
            { this.state.message }
          </p>
        </header>
        <NewCardForm addCardCallback = { this.addCardRequest }/>
        <div className = "board">
          { this.renderCards() }
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
