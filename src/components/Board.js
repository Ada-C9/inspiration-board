import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/watson/cards'

class Board extends Component {
  constructor(props) {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback("loading cards...", "success");
    axios.get(CARDS_URL)
    .then((response) => {

      this.setState({ cards: response.data });

      this.props.updateStatusCallback("successfully loaded cards", "success");
    })

    .catch((error) => {
      this.setState({ error: error.message });

      this.props.updateStatusCallback(error.message, 'error');

    this.setState({
      status: {
        message: `Failed to load cards: ${error.message}`,
        type: 'error'
      }
    })

    });
  }


  addCard = (card) => {
    axios.post(CARDS_URL, card)
      .then((response) => {
        this.props.updateStatusCallback(`successfully added card ${ card.text }`, "success");

        let updatedCards = this.state.cards;
        updatedCards.push(response.data);

        this.setState({ cards: updatedCards });
      })
      .catch((error) => {
        this.props.updateStatusCallback(`Error adding card ${ card.name }`, 'error');
      });
  }

  render() {

    const cards = this.state.cards.map((card, index) => {
      return(
        <Card key={index}
        text={card.card.text}
        emoji={card.card.emoji}
        />
    )
    });

    return (
      <div className="board">
        <NewCardForm addCardCallback={this.addCard}/>
        { cards }
      </div>
    )
  }

}

Board.propTypes = {
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
