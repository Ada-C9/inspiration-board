import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    boardName: PropTypes.string.isRequired,
    updateStatusCallback: PropTypes.func.isRequired
  }

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
        this.setState({cards: cards});
      })
      .catch((error) => {
        console.log('Error');
        console.log(error);

        this.props.updateStatusCallback(`Error loading cards: ${error.message}`, 'error');
      });
  }

  addCard = (input_text, input_emoji) => {
    axios.post(this.props.url + this.props.boardName + '/cards', {text: input_text, emoji: input_emoji})
      .then((response) => {
        console.log('Success!');
        console.log(response);

        this.props.updateStatusCallback(`Successfully added card ${ response.data.card.id }!`, 'success');

        let updatedCards = this.state.cards;
        updatedCards.push(
          { card:
            {
              id: response.data.card.id,
              text: input_text,
              emoji: input_emoji
            }
          });
        this.setState({ cards: updatedCards });
      })
      .catch((error) => {
        console.log('Error');
        console.log(error);

        this.props.updateStatusCallback(`Error adding card: ${error.message}`, 'error');
      });
  }

  deleteCard = (card) => {
    axios.delete(this.props.url + this.props.boardName + '/cards/' + card.props.id)
    .then((response) => {
      console.log('Success!');
      console.log(response);

      this.props.updateStatusCallback(`Successfully deleted card ${ response.data.card.id }!`, 'success');
      let updatedCards = this.state.cards;
      updatedCards.splice(card.props.index, 1);
      this.setState({cards: updatedCards});
    })
    .catch((error) => {
      console.log('Error :(');
      console.log(error);

      this.props.updateStatusCallback(`Error deleting card: ${error.message}`, 'error');
    });
  }

  render() {
    const cards = this.state.cards.map((item, index) => {
      return <Card
          key={item.card.id}
          id={item.card.id}
          text={item.card.text}
          emoji={item.card.emoji}
          index={index}
          deleteCardCallback={this.deleteCard}
          />
    });

    return (
      <main>
        <section className="board">
          {cards}
        </section>
        <section className="new-card-form">
          <NewCardForm addCardCallback={this.addCard} />
        </section>
      </main>
    )
  }
}

export default Board;
