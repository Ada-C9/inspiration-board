import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

	componentDidMount(){
		this.setState({
			cards: CARD_DATA.cards
		})
	}

  render() {
		const cardCollection = this.state.cards.map((card, index) =>{
			return <Card key={index}
				text={card.text}
				emoji={card.emoji}
				/>
		});
    return (
      <div className="board">
				{cardCollection}
      </div>
    )
  }

}

// Board.propTypes = {
//
// };

export default Board;
