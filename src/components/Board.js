import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const MY_BOARD_URL = "https://inspiration-board.herokuapp.com/boards/maria/cards"

class Board extends Component {

  static propTypes = {
    // boardName: PropTypes.string.isRequired,
    updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    axios.get(MY_BOARD_URL)
      .then((response) => {
        console.log('Success!');
        console.log(response);

      const newCards = response.data
      this.setState({ cards: newCards });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  addCard = (card) => {
    axios.post(MY_BOARD_URL, card)
      .then((response) => {
        console.log(response.data);
        this.props.updateStatusCallback(`Successfully added card`, 'success');

        let updatedCards = this.state.cards;
        updatedCards.push(response.data);
        console.log(updatedCards); // TODO 

        this.setState({ cards: updatedCards });
      })
      .catch((error) => {
        console.log(error);
        this.props.updateStatusCallback(`Error adding card!`, 'error');
      });
  }

  deleteCard = (card) => {
    // TODO

  };

  render() {
    const myCards = this.state.cards.map((message, index) => {
      return <Card key={index}
      text={message.card.text}
      emoji={message.card.emoji}
      deleteCardCallback={this.deleteCard} />
    });

    // TODO figure out if { myCards } needs to stay
    return (
      <section>
        <NewCardForm addCardCallback={this.addCard}/>
          <div className="board">
           { myCards }
          </div>
      </section>
    )
  }
}

Board.propTypes = {

};

export default Board;
