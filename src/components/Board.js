import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback('Loading cards...', 'success');

    axios.get(this.props.url + this.props.boardName + '/cards')
      .then((response) => {
        console.log('Success!');
        console.log(response);

        this.props.updateStatusCallback('Successfully loaded cards!', 'success');

        const cards = response.data;
        this.setState({ cards: cards });
      })
      .catch((error) => {
        console.log('Error :(');
        console.log(error);

        this.props.updateStatusCallback(error.message, 'error');
      });
  }

  addCard = (card) => {
    axios.post(this.props.url + this.props.boardName + '/cards', card)
      .then((response) => {
        this.props.updateStatusCallback(`Successfully added card ${ response.data.card.id }!`, 'success');

        let updatedCards = this.state.cards;
        updatedCards.push({ card: card });

        this.setState({ cards: updatedCards });
        console.log(this.state);
      })
      .catch((error) => {
        console.log('Error :(');
        console.log(error);

        this.props.updateStatusCallback('Error adding card.', 'error');
      });
  }

  deleteCard = (id, index) => {
    axios.delete(this.props.url + this.props.boardName + '/cards/' + id)
    .then((response) => {
      this.props.updateStatusCallback(`Successfully deleted card ${ response.data.card.id }!`, 'success');

      let updatedCards = this.state.cards;

      updatedCards.splice(index, 1);

      this.setState({ cards: updatedCards });
    })
    .catch((error) => {
      console.log('Error :(');
      console.log(error);

      this.props.updateStatusCallback('Error deleting card', 'error');
    });
  }

  render() {
    const cards = this.state.cards.map((item, index) => {
      return <Card
          key={ item.card.id }
          id={ item.card.id }
          text={ item.card.text }
          emoji={ item.card.emoji }
          index={ index }
          deleteCardCallback={this.deleteCard}
          />
    });

    return (
      <div>
        <div className="board">
          { cards }
        </div>
        <NewCardForm addCardCallback={this.addCard} />
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  updateStatusCallback: PropTypes.func.isRequired
};

export default Board;
