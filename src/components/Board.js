import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARD_URL = "https://inspiration-board.herokuapp.com/boards/karinna/cards"
class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

	componentDidMount(){

		axios.get(BOARD_URL)

		.then((response) =>{
			this.setState({
				cards: response.data
			})
		})
		.catch((error) => {

		});

	}

  render() {
		const cardCollection = this.state.cards.map((obj, index) =>{
			return <Card key={index}
				text={obj.card.text}
				emoji={obj.card.emoji}
				/>
		});
    return (
      <div className="board">
				{cardCollection}
      </div>
    )
  }

}


export default Board;
