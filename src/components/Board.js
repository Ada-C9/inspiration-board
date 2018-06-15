import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';




const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/brenda/cards'


class Board extends Component {


  constructor() {
    super();

    this.state = {
      cards: [],
      status: {
        message: "Successfuly cards loaded!",
        type: "success"
      }
    };
  }


  componentDidMount = () => {

    let board_name = this.props.boardName
    axios.get('https://inspiration-board.herokuapp.com/boards/brenda/cards')

    .then( (response) => {

      this.props.updateStatusCallback(`Successfully loaded  cards from ${board_name}!`, 'success');

      const cardsData = response.data.map((card) =>{
        return {text: card.card.text,
          emoji: card.card.emoji,
          id: card.card.id
        };
      });
      this.setState({cards: cardsData})
    })
    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error');
    })
  }


  deleteCard = (id) => {

    let board_name = this.props.boardName;

    this.props.updateStatusCallback(`Deleting card ${id}`, 'success');

    axios.delete(`https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards/${id}`)
    .then((response) => {

      this.props.updateStatusCallback(`Successfully deleted card ${id} from ${board_name}´s board!`, 'success');

      const updatedCardsList = []
      this.state.cards.map((card) => {

        if (card.id !== id) {
          updatedCardsList.push(card);
        }

      });
      this.setState({cards: updatedCardsList});

    })
    .catch( (error) => {
      console.log(error);

      this.props.updateStatusCallback(error.message, 'success');
    });
  }


  addCard = (card) => {

    let updatedCards = this.state.cards;

    axios.post(CARDS_URL, card)
    .then((response) => {

      this.props.updateStatusCallback(`Sucessfully added a new card!` , 'success');
    

      card.id = response.data.card.id;
      updatedCards.push(card);

      this.setState({cards: updatedCards});
    })

    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error');

    });
  }


  render() {
    const cards = this.state.cards.map((card, index) => {
      return <Card key={index}
      text = {card.text}
      emoji = {card.emoji}
      id = {card.id}
      deleteCardCallback={this.deleteCard}

      />
    }
  )
  return (
    <div className="board">


    <NewCardForm addCardCallback={this.addCard}/>
    {cards}
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
