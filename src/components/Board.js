import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


const CARDS_URL = "https://inspiration-board.herokuapp.com/boards/cards/cards";
class Board extends Component {
	constructor() {
		super();

		this.state = {
			cards: [],
			status: {
				message: '',
				type: ''
			}
		};
	}

	componentDidMount() {
		axios.get(CARDS_URL)
		.then( (response) => {
			console.log(response.data);
			this.setState({ cards: response.data})
		})
		.catch( (error) => {
			console.log(error);
			this.setState({ message: error.message, type: 'error'})
		})
	}

	render() {
		const cards = this.state.cards.map( (card, index) => {
			return <Card
				key={ index }
				text={ card.card.text }
				emoji={ card.card.emoji }
			/>
		})

		return (

			<div >
        <section>
					<NewCardForm />
				</section>
				<section className='board'>
					{ cards }
				</section>
			</div>
		)
	}

}

Board.propTypes = {

};

export default Board;
