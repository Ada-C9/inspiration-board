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
    console.log('Component did mount was called');

    axios.get('https://inspiration-board.herokuapp.com/boards/mariko/cards')
      .then( (response) => {
        this.setState({ cards: response.data });
    })
      .catch( (error) => {
        this.setState({ error: error.message });
    });
  }

  addCard = (message) => {
    const cards = this.state.cards;
    axios.post('https://inspiration-board.herokuapp.com/boards/mariko/cards/', message)
      .then( (response) => {
        console.log(response);
        message.id = response.data.card.id;
        cards.push({card: message})
        this.setState({
          cards,
          message: 'Successfully added card to board'});

       })
      .catch( (error) => {
        this.setState({ error: error.message });
});
  }

  renderCardList = () => {
    const componentsList = this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          text={card['card'].text}
          emoji={card['card'].emoji}
          id={card['card'].id}
          deleteCard={this.deleteCard}

          />
      );
    });
    return componentsList;
  }

  deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/boards/mariko/cards/${id}`)
      .then( (response) => {
        console.log(response);
        this.componentDidMount();

       })
      .catch( (error) => {
        this.setState({ error: error.message });
});
  }

  render() {
    return (
      <section>
        <p className='validation-errors-display'> {this.state.message} </p>
        <p className='validation-errors-display'> {this.state.error} </p>
        <div>
          <NewCardForm addCardCallback={this.addCard} />
        </div>
        <div className='board'>
          {this.renderCardList()}
        </div>
      </section>
    )
  }

}

Board.propTypes = {

};

export default Board;
