import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import emoji from 'emoji-dictionary';


import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const BOARD_URL = "https:/inspiration-board.herokuapp.com/boards/karinna/cards"

class Board extends Component {
	static propTypes = {
		updateStatusCallback: PropTypes.func
	}
	constructor() {
		super();

		this.state = {
			cards: []
		};
	}

	componentDidMount(){

		axios.get(BOARD_URL)

		.then((response) =>{
			this.props.updateStatusCallback("Successfully loaded board", "success")

			this.setState({
				cards: response.data
			})
		})
		
		.catch((error) => {
			this.props.updateStatusCallback(`Failed to load: ${error.message}`, "failure")
		});

	}

	addCard = (card) => {
		card.emoji = emoji.getName(card.emoji)

		axios.post(BOARD_URL, card)

		.then((response) => {
			let updatedCards = this.state.cards;
			updatedCards.push({card});
			this.setState({ cards: updatedCards });
			this.props.updateStatusCallback(`Successfully added card`, "success")
		})
		.catch((error) => {
			this.props.updateStatusCallback(`Failed to add Card: ${error.message}`, "failure")
		});

	}

	deleteCard = (card) => {
		console.log(card);
		axios.delete(`${BOARD_URL}/${card.props.id}`)
		.then((response) => {
			this.props.updateStatusCallback("Successfully Deleted Card", "success")
			let updatedCards = this.state.cards;

			updatedCards.splice(card.props.index,1)


			this.setState({
				cards: updatedCards
			})

		})
		.catch((error) => {
			this.props.updateStatusCallback(`Failed to add card: ${error.message}`, "failure")
		});
	}

	render() {

		const cardCollection = this.state.cards.map((obj, index) =>{
			return <Card key={index}
				text={obj.card.text}
				emoji={obj.card.emoji}
				id={obj.card.id}
				index={index}
				deleteCardCallback={this.deleteCard}
				/>
		});

		return (
			<section>
				<div className="new-card-form">
					<NewCardForm
						addCardCallback={this.addCard}
						/>
				</div>
				<div className="board">
					{cardCollection}
				</div>
			</section>
		)
	}

}


export default Board;
