import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARD_URL = 'https://inspiration-board.herokuapp.com/boards/kiera-thomasson/cards'

class Board extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func
  };

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount()  {
    // this.props.updateStatusCallback('Loading cards...','success');

    axios.get(BOARD_URL)
    .then((response) =>{
      console.log('Success');
      // console.log(response);

      // this.props.updateStatusCallback('Successfully loaded cards!','success')

      const cards = response.data;
      this.setState({cards: cards});
    })
    .catch((error) => {
      // console.log(error);
      // this.props.updateStatusCallback(error.message,'error');
    })
  }

  deleteCard = (index,id) => {
    axios.delete( 'https://inspiration-board.herokuapp.com/boards/kiera-thomasson/cards/'+ id)
    .then((response) => {
      console.log(response);
      console.log(response.data);
      // this.props.updateStatusCallback(`Successfully deleted ${response.data.card.text}`, 'success')

    let currentCards = this.state.cards

    currentCards.splice(index,1);

    this.setState({cards: currentCards });
    })
    .catch((error) => {
      console.log(error);
      // this.props.updateStatusCallback(`Error deleting card`,'error')
    })
  };
// display logic first top to bottom
//
  addCard = (props) => {
    axios.post(BOARD_URL, props)
    .then((response) =>{
      console.log(response.data, "responsedata");

      let currentCards = this.state.cards;

      currentCards.push(response.data);

      this.setState({cards: currentCards});
    })
    .catch((error) => {
      console.log(error);
    })
  }


  render() {
    const cards = this.state.cards.map((post,index) => {
      return <Card
        key={ index }
        index={index}
        id={ post.card.id }
        text={ post.card.text }
        emoji={ post.card.emoji }
        deleteCardCallback={ this.deleteCard }
      />
    });

    return (
      <div className="board">
        { cards }
        <NewCardForm  addCardCallback={this.addCard}/>
      </div>
    )
  }

}


export default Board;
