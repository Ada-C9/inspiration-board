import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


class Board extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    boardName: PropTypes.string.isRequired,
    updateStatusCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      this.props.updateStatusCallback(`Successfully loaded board, ${this.props.boardName}`)
      const cards = response.data;
      this.setState({ cards: cards });
    })
    .catch((error) => {
      console.log(error.message)
      this.props.updateStatusCallback(error.messages, 'error')
    })
  }

  addCard = (card) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`, card)

      .then((response) => {
        this.props.updateStatusCallback(`Successfully added card to board ${this.props.boardName}`)
        let updatedCards = this.state.cards;
        updatedCards.push(response.data);
        this.setState({ cards: updatedCards });
      })
      .catch((error) =>{
        console.log(error.message)
        this.props.updateStatusCallback(error.messages, 'error')
      })
  }

  removeCard = (id) => {
    axios.delete(`${this.props.url}${this.props.boardName}/cards/${id}`)
      .then((response) =>{
        this.props.updateStatusCallback('Successfully deleted card')
        let updatedCards = this.state.cards;
        updatedCards.pop(response.data);
        this.setState({ cards: updatedCards });
      })
      .catch((error) => {
        console.log(error.message);
        this.props.updateStatusCallback(error.messages, 'error')
      })
  }

  render() {

    const cards = this.state.cards.map((note, index) =>{
      return <Card key={index}
      text={note.card.text}
      emoji={note.card.emoji}
      deleteCallback={this.removeCard}
      id={note.card.id} />
    })

    return (
      <section>

        <div className="board-header">
          Board: {this.props.boardName}
        </div>
        <div className="board">
          {cards}
        </div>
        <div>
          <NewCardForm addCardCallback={this.addCard}/>
        </div>
      </section>
    )
  }

}

export default Board;
