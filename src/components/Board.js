import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

 const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/Jamila_Cornick/cards'
class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(CARDS_URL)
    .then((response) => {
      console.log('Success!');
      console.log(response);
      console.log(response.data[0]);

      this.setState({cards: response.data })
      this.props.updateStatusCallback(`Loaded all cards successfully`)

    })
    .catch((error)=>{
      console.log('Error :(');
      console.log(error);
      this.props.updateStatusCallback(`Error unable to load cards`)

    });
  }


    cardClicked = (id) => {

    axios.delete(`${CARDS_URL}/${id}`)
    .then((response) => {

      console.log('Success!');
      let updatedCard = this.state.cards;
      updatedCard.pop(id);

      this.setState({cards: updatedCard});

      this.props.updateStatusCallback(`Deleted card ${id} successfully`)

    })
    .catch((error) => {

      console.log(error);

      this.props.updateStatusCallback(`There was an error deleting ${id}`)

    });

    }



  render() {
    console.log('in render, this is this.state.cards:');
    console.log(this.state.cards);
    const cards = this.state.cards.map((card, index)=>{
      return <Card key={index}
      emoji={card.card.emoji}
      id={card.card.id}
      text={card.card.text}
      cardCallback={this.cardClicked}/>
    })

    return (
      <div>
        Board
        {cards}
      </div>
    )
  }

}

Board.propTypes = {
  updateStatusCallback: PropTypes.func.isRequired

};

export default Board;
