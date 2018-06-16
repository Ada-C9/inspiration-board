import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/kirsten/cards')
      .then((response) => {
        console.log(response.data);
        const cards = response.data.map(inputCard => inputCard.card);
        this.setState({ cards });
      })
      .catch((error) => {
        this.setState({ error: error.message});
      });
  }
  addCard = (event) => {
    console.log(event);

    // const currCard = this.state.cards[index];
    axios.post(`https://inspiration-board.herokuapp.com/boards/kirsten/cards/`)
      .then((response) => {
        console.log(response);
        let updatedData = this.state.cards;
        // updatedData.add(index, 1);
        // console.log(updatedData);
        // this.setState({cards: updatedData});
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  removeCard = (index) => {
    const currCard = this.state.cards[index];
      axios.delete(`https://inspiration-board.herokuapp.com/boards/kirsten/cards/${currCard['id']}`)
        .then((response) => {
          let updatedData = this.state.cards;
          updatedData.splice(index, 1);
          // console.log(updatedData);
          this.setState({cards: updatedData});
        })
        .catch((error) => {
          this.setState({ error: error.message });
        });
    };

  renderCardsList = () => {
    // console.log(this.state.cards);
    return this.state.cards.map((card, index) => {
      console.log(card);

      return (
        <Card
          key={card.id}
          index={index}
          text={card.text}
          emoji={card.emoji}
          removeCardCallback={this.removeCard}
        />
      )
    });
  };

  render() {
    return (
      <div className="board">
        {<NewCardForm
          addCardCallback={this.addCard}
        />}
        {this.renderCardsList()}
        </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
