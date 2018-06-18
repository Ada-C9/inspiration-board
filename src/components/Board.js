import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import emoji from 'emoji-dictionary';


import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


class Board extends Component {

	static propTypes = {
		updateStatusCallback: PropTypes.func,
		url: PropTypes.string,
		name: PropTypes.string
	}
	constructor() {
		super();

		this.state = {
			cards: [],
			name: null
		};

	}



	componentDidMount(){
		axios.get(`${this.props.url}/${this.props.name}/cards`)
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

	componentDidUpdate(prop, state) {
		if (prop.name !== this.props.name) {
			axios.get(`${this.props.url}/${prop.name}/cards`)
			.then((response) =>{
				this.props.updateStatusCallback("Successfully loaded board", "success")

				this.setState({
					cards: response.data,
					name: prop.name
				})
			})
			.catch((error) => {
				this.props.updateStatusCallback(`Failed to load: ${error.message}`, "failure")
			});
		}
	}

	addCard = (card) => {
		card.emoji = emoji.getName(card.emoji)

		axios.post(`${this.props.url}/${this.props.name}/cards`, card)

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
		axios.delete(`${this.props.url}/${this.props.name}/cards/${card.props.id}`)
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
