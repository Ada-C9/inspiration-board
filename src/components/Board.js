import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const CARDS_URL ="https://inspiration-board.herokuapp.com/boards/Cara/cards";


class Board extends Component {
  constructor() {
    super();

    this.state ={
       cards:[]

    };
  }

  componentDidMount() {
    axios.get(CARDS_URL)
    .then((response)=> {
      this.setState({cards: response.data});
    })
    .catch((error) =>{
        this.setState({error: error.message});
    });
  }


  render() {

    console.log(this.state.cards)

    const cardComponents = this.state.cards.map((card, index)  =>
  {
    return <Card
      text={card.card.text}
      emoji={card.card.emoji}
      key={ index }

    />
  })

  console.log(cardComponents)
    return (
      <div>
        {cardComponents}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
