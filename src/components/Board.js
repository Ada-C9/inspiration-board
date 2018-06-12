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

  componentDidMount = () => {
    console.log('Component did mount was called')

    axios.get('https://inspiration-board.herokuapp.com/boards/angelap/cards')
    .then((response) => {
      this.setState({ cards: response.data });
      console.log(response.data)
    })
    .catch((error) => {
      console.log('Error is happening');
      console.log(error);
      this.setState({ error: error.message});
      return error;

    });
  }

  renderCards = () => {
    console.log('Rendering cards')
    const cardList = this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          id={card["card"].id}
          text={card["card"].text}
          emoji={card["card"].emoji}
          deleteCard={this.deleteCard}
          />
      );
    });
    return cardList;
  }

  addCard = (note) => {
    const cards = this.state.cards;
    axios.post('https://inspiration-board.herokuapp.com/boards/angela/cards', note)
      .then((response) => {
        cards.push(note);
        this.setState({
          cards,
          message: `Sucessfully Added a new Card`
        });
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          message: error.message,
        });
      })

  }

  deleteCard = (id) => {
    console.log(id)
    axios.delete(`https://inspiration-board.herokuapp.com/boards/angelap/cards/${id}`)
    .then((response) => {
      this.componentDidMount();
      console.log(response)
    })
    .catch((error) => {
      console.log('Unable to delete card');
      console.log(error);
      this.setState({ error: error.message});
      return error;

    });
  }

  render() {
    return (
      <div>
        <section className="board">
          <p>{this.state.error}</p>
          <p>{this.state.message}</p>
          {this.renderCards()}
          <NewCardForm addCardCallBack={this.addCard} />
        </section>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
