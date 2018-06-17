import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import UpdateCardForm from './UpdateCardForm';
import ChangeBoardForm from './ChangeBoardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      editing: '',
      // currentBoard: props.boardName,
      allBoards: []
    };
  }

  componentDidUpdate(prevProps) {
    //only update the board if the boardName has changed
  if (prevProps.boardName !== this.props.boardName) {
    this.setBoard();
  }
}

  componentDidMount() {
    this.setBoard();
  }

  setBoard() {
    const BASE_URL = this.props.url
    const BOARD = this.props.boardName
    const CARDS = '/cards'

    axios.get(BASE_URL + BOARD + CARDS)
    .then((response) => {
      const cards = response.data;

      this.setState({cards: cards});
      this.props.updateStatusCallback(``, 'success')
    })
    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error')
    })

    axios.get(BASE_URL)
    .then((response) => {
      const boards = response.data;
      let updateState = Object.assign({}, this.state)
      boards.forEach((element) => {
        updateState.allBoards.push(element.board.name)
      });
      this.setState(updateState);
    })
    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error')
    })
  }

  updateCard = (card, index) => {
    const editingCard = this.state.cards[index].card

    const BASE_URL = this.props.url
    const BOARD = this.props.boardName
    const CARD = `${BASE_URL + BOARD}/cards/${editingCard.id}?emoji=${card.emoji}&text=${card.text}`

    axios.patch(CARD)
    .then((response) => {
      let updateState = Object.assign({}, this.state)
      const newCard = response.data
      updateState.cards[index] = newCard;
      updateState['editing'] = '';

      this.setState(updateState);
      this.props.updateStatusCallback(`Card updated with ${card.emoji}: ${card.text} `, 'success')
    })
    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error')
    })


  }

  addCard = (card) => {
    const BASE_URL = this.props.url
    const BOARD = this.props.boardName
    const CARD = `${BASE_URL + BOARD}/cards?emoji=${card.emoji}&text=${card.text}`

    axios.post(CARD)
    .then((response) => {
      let updateState = Object.assign({}, this.state);

      const newCard = response.data;
      updateState.cards.push(newCard);

      this.setState(updateState);
    })
    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error')
    })

  }

  removeCard = (card) => {
    const BASE_URL = this.props.url
    const BOARD = this.props.boardName
    const CARD = `${BASE_URL + BOARD}/cards/${card.id}`

    axios.delete(CARD)
    .then((response) => {
      let updateState = Object.assign({}, this.state);

      const cardIndex = card.index;
      updateState.cards.splice(cardIndex, 1);

      this.setState(updateState);

    })
    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error')
    })
  }

  toggleEditing = ( itemId ) => {
    let updateState = Object.assign({}, this.state);
    updateState['editing'] = itemId

    this.setState(updateState);
  }

  renderItemOrEditField( item, index ) {
    if ( this.state.editing === item.id ) {
      return <UpdateCardForm key={`editing-${index}`} card={item} index={index} updateCardCallback={this.updateCard}/>
    } else {
      return <Card
        key={item.id}
        updateClickCallback={ this.toggleEditing.bind( null, item.id ) }
        id={item.id}
        index={index}
        emoji={item.emoji}
        text={item.text}
        removeCardCallback={this.removeCard}
        />
    }
  }

  render() {
    const cardCollection = this.state.cards.map(( post, index ) => {
      return this.renderItemOrEditField( post.card, index );
    })

    return (
      <section className="board">
        <NewCardForm addCardCallback={this.addCard}/>
        <ChangeBoardForm key='' changeBoardCallback={this.props.changeBoardCallback} currentBoard={this.props.boardName} allBoards={this.state.allBoards}/>
        {cardCollection}
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  changeBoardCallback: PropTypes.func.isRequired,
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
