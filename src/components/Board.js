import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const CARDS_URL = "https://inspiration-board.herokuapp.com/boards/wenjie/cards";
const BOARD_URL = "https://inspiration-board.herokuapp.com/boards/";


class Board extends Component {
	static propTypes = {
		updateStatusCallback: PropTypes.func,
		boardName: PropTypes.string,
		url: PropTypes.string
	}

	constructor() {
		super();

		this.state = {
			boardName: 'wenjie',
			cards: [],
			status: {
				message: '',
				type: ''
			}
		};
	}

	getBoard(url, board) {
		// console.log(`state boardName: ${this.state.boardName}`);
		// let url = `${this.props.url}${this.state.boardName}/cards`;
		// console.log(url);
		const boardUrl = url + board + '/cards'
		axios.get(boardUrl)
		.then( (response) => {
			this.setState({ cards: response.data})
		})
		.catch( (error) => {
			this.setState({ message: error.message, type: 'error'})
		})
	}

	componentDidMount() {
		this.getBoard(this.props.url, this.state.boardName)
	}

	componentDidUpdate(prevProps) {
		if ( this.props.boardName && this.props.boardName !== prevProps.boardName ) {
			// console.log(this.props);
      this.setState({
				boardName: this.props.boardName
			})
			console.log(this.state.boardName);
			this.getBoard(this.props.url, this.props.boardName)
		}

	}

	createNewCard = (card) => {
		axios.post(CARDS_URL, card)
		.then((response) => {
			this.props.updateStatusCallback(`Successfully created card ${ card.text }`, 'success');

			let newCards = this.state.cards;
			let newCard = {card: card};
			newCards.push(newCard);
			this.setState({ cards: newCards })
		})
		.catch((error) => {
			this.props.updateStatusCallback( error.message, 'error')
		});
	}

	deleteCard = (card) => {
		console.log(`Before delete: ${this.state.cards}`);
		axios.delete(`${CARDS_URL}/${card.id}`)
		.then((response) => {
			this.props.updateStatusCallback(`Successfully removed card ${ card.id }`, 'success')

			//  use array.shift() to remove the first element
			this.componentDidMount();
		})
		.catch((error) => {
			this.props.updateStatusCallback( error.message, 'error')
		});
	}

	render() {
		const cards = this.state.cards.map( (card, index) => {
			return <Card
				key={ index }
				text={ card.card.text }
				emoji={ card.card.emoji }
				id={ card.card.id }
				deleteCardCallback={ this.deleteCard }
			/>
		});

		return (

			<div >
				<section>
					<NewCardForm createNoteCallback={ this.createNewCard }
						boardName={ this.state.boardName }/>
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
