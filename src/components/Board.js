import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

// const BASE_URL = "https://inspiration-board.herokuapp.com/boards/"

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardName: props.boardName,
      cards: [],
      status: {
        type: '',
        messages: {}
      }
    };
  }

  // getBootstrappedCards = () => {
  //   let initialCards = [];
  //   CARD_DATA.cards.forEach((card, ) => {
  //     initialCards.push(
  //       {card: {
  //         "id":
  //         "text": card.text,
  //         "emoji": card.emoji
  //       }}
  //     )
  //   })
  //
  //   return initialCards
  // }

  componentDidMount = () => {
    const BOARD_URL = this.props.url + this.state.boardName + "/cards"

    axios.get(BOARD_URL)
      .then((response) => {
        this.setState({cards: response.data});

      }).catch((error) => {
        console.log(error.message);
      });
  }

  deleteCard = (cardId) => {
    const DELETE_URL = this.props.url + this.state.boardName + `/cards/${cardId}`
    axios.delete(DELETE_URL)
      .then((response) => {
        let newState = this.state.cards.filter((card) => {return card.id !== response.data.card.id })

        this.setState({
          cards: newState,
          status: {
            type: 'success',
            messages: {
              "success": "Card successfully deleted"
            }
          }
        });
      }).catch((error) => {

      });
  }

  createNewPet = (data) => {
    const NEW_PET_URL = this.props.url + this.state.boardName + "/cards"
    axios.post(NEW_PET_URL, data)
      .then((response) => {
        // let newState = this.state.cards.concat(response.data);
        let newState = Array.from(this.state.cards);
        newState.splice(0, 0, response.data);
        this.setState({
          cards: newState,
          status: {
            type: 'success',
            messages: {
              "success": "Card successfully added"
            }
          }
        });

      }).catch((error) => {
        let errorMessages = error.response.data.errors;
        this.setState({status:
          {
            type: 'error',
            messages: errorMessages
          }
        });
      });
  }



  getCards = () => {
    return this.state.cards.map((cardData, index) => {
      return (
        <Card
          key={index}
          id={cardData.card.id}
          text={cardData.card.text}
          emoji={cardData.card.emoji}
          onDeleteClick={this.deleteCard}
        />
      )
    })
  }


  render() {
    const statusMessage = Object.keys(this.state.status.messages).map((field, index) => {
      return <li key={index}>{this.state.status.messages[field]}</li>
    });
    return (
      <section>
        <div className="validation-errors-display">
          <ul className="validation-errors-display__list">
            {statusMessage}
          </ul>
        </div>
        <NewCardForm onSubmitForm={this.createNewPet}/>
        <div className="board">
          {this.getCards()}
        </div>
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
