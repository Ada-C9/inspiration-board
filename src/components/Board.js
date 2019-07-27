import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const CARDS_URL = "https://inspiration-board.herokuapp.com/boards/Luxi/cards";

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    console.log('In componentsDidMount');

    this.props.updateStatusCallback('Loading...', 'success');

    axios.get(CARDS_URL)
    .then((response) => {
      console.log('Success!');

      this.props.updateStatusCallback('Successfully loaded all cards!', 'success');

      const cards = response.data;
      this.setState({ cards: cards });
    })
    .catch((error) => {
      // console.log('Error :(');
      // console.log(error);

      this.props.updateStatusCallback(error.message, 'error');
    });
  }

  addCard = (cardInfo) => {
    console.log('In addCard');

    axios.post(CARDS_URL, cardInfo)
    .then((response) => {

      this.props.updateStatusCallback(`Successfully added card ${ response.data.card.id }!`, 'success');

      let updateCards = this.state.cards;
      updateCards.push(response.data);

      this.setState({ cards: updateCards });
    })
    .catch((error) => {
      console.log(error);

      this.props.updateStatusCallback(`${error.message} - failed to add new card`, 'error');
    });
  }

  deleteCard = (index, id) => {
    console.log('In deleteCard')

    let updateCards = this.state.cards;
    updateCards.splice(index, 1)
    this.setState({ cards: updateCards });

    const DELETE_URL = `https://inspiration-board.herokuapp.com/cards/${id}`

    axios.delete(DELETE_URL)
    .then((response) => {
      console.log('Deleted!');
      console.log(response.data);

      this.props.updateStatusCallback('Successfully deleted card!', 'success');

    })
    .catch((error) => {
      // console.log('Error :(');
      // console.log(error);

      this.props.updateStatusCallback(error.message, 'error');
    });
  }

  render() {

    const cards = this.state.cards.map((card, index) => {
      return <Card key={index}
        index={index}
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        deleteCallback={this.deleteCard}/>
    });

    return (
      <section>
      <NewCardForm addCardCallback={this.addCard}/>

      <div className="board">
        { cards }
      </div>
      </section>
    );
  }

}

Board.propTypes = {
  // cards: PropTypes.array.isRequired,
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
