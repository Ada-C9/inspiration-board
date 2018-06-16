import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARDS_URL = 'https://inspiration-board.herokuapp.com/boards/Emilce/cards';

const DELETE_URL = 'https://inspiration-board.herokuapp.com/boards/Emilce/cards/';

const CARD_URL = 'https://inspiration-board.herokuapp.com/boards/Emilce/cards';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  deleteCard = (cardId) => {
    console.log( "This is card:"+ cardId);
    console.log(`${DELETE_URL}${cardId}`);
    axios.delete(`${DELETE_URL}${cardId}`)
    .then((response) => {
      console.log(response);
      for (let i = 0; i < this.state.cards.length; i++) {
        if (this.state.cards[i].card.id === cardId) {
          this.state.cards.splice(i, 1);
          this.setState({cards: this.state.cards});

          console.log(`deleting card ${this.state.cards[i].card.id}`);
          break;
        }
      }

    })
    .catch((error) => {
      this.setState({ error: error.message })
    })
  }

  addCard = (card) => {
    console.log("adding card");
    axios.post(CARD_URL, card)
      .then((response) => {
        console.log("THIS IS RESPONSE",response);

        let updatedCards = this.state.cards;
        updatedCards.push(response.data);

        this.setState({ cards: updatedCards });
      })
  }

  componentDidMount() {
    this.props.updateStatusCallback('Loading cards...', 'success');

    axios.get(BOARDS_URL)
    .then((response)=> {
      console.log("getting board data");
      console.log(response);

      this.props.updateStatusCallback('Successfully loaded cards!', 'success');

      const data = response.data.slice(0,100);
      this.setState({cards: data})
    })
    .catch((error) => {
      console.log(error);
      // this.setState({ error: error.message})
      this.props.updateStatusCallback(error.message, 'error');
    })
  }


  render() {
    const attrCards = this.state.cards
    console.log("attr cards: ",  attrCards);

    const cards = attrCards.map((cardInfo, index) => {
      console.log("inside card mapping");
      return <Card
      onDeleteCard={this.deleteCard}
      key={index}
      id={cardInfo.card.id}
      text={cardInfo.card.text} emoji={cardInfo.card.emoji} />
    });

    return (

      <section>

      <div>
      <NewCardForm addCardCallback={this.addCard}/>
      </div>

      <div className="board">

      { cards }
      </div>

      </section>
    )
  }

}

Board.propTypes = {
  deleteCard: PropTypes.func.isRequired,
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
