import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// NOTE: WILL RENDER OUT A LIST OF CARDS

const CARDS_URL = 'https://inspiration-board.herokuapp.com/boards/AnaLisa/cards';

class Board extends Component {
  static propTypes = {
    updateStatusCallback: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.props.updateStatusCallback('Loading Cards...', 'success');

    axios.get(CARDS_URL)
    .then((response) => {
      console.log('Success');
      // console.log(response);

      this.props.updateStatusCallback('Successfully loaded cards, Take one!', 'success');
      // if we wanted only a first 10 cards, pre-processing on data, additional pre-processing or logic on data would be done here
      const cards = response.data
      // To get all of the cards, we reset the state with the response data (which is the cards)
      this.setState({ cards: cards });
    })
    .catch((error) => {
      // console.log('Error :(');
      // console.log(error);
      // Alert user to errors on screen by altering the status we are tracking with state
      this.props.updateStatusCallback(error.message, 'error');
    });
  }

  // FIXME: This portion of functionality is not working. I keep receiving a 404 Not Found, and need to turn it in.

  // need a callback function that we will then pass to the NewCardForm
  // Call back function for deleting card
  deleteCard = ( index, id) => {
    axios.delete(CARDS_URL + `${id}`)
    .then((response) => {
      console.log(response);
      console.log(response.data);
      this.props.updateStatusCallback(`Successfully Deleted Card ${response.data.card.text}`, 'success');

      let updatedCards = this.state.cards
      console.log(updatedCards);

      updatedCards.splice(index,1);
      this.setState({cards: updatedCards });
    })

    .catch((error) => {
      console.log(error);
      this.props.updateStatusCallback('Error deleting card', 'error');
    });
  }


  addCard = (props) => {
    axios.post(CARDS_URL, props)
    .then((response) => {
      console.log(response.data);

      let updatedCards = this.state.cards;
      updatedCards.push(response.data);

      // then update state to updated cards collection
      this.setState({ cards: updatedCards });

      this.props.updateStatusCallback('Successfully added card', 'success');
    })

    .catch((error) => {
      this.props.updateStatusCallback('Error adding card', 'error');
      console.log(error);
    });
  }


  render() {
    const cards = this.state.cards.map((card, index) => {
      // console.log(card)
      // console.log(card.card.text)
      return <Card
      key={ index }
      index={ index }
      text={ card.card.text }
      id={ card.card.id }
      emoji={ card.card.emoji }
      deleteCardCallback={ this.deleteCard }
      />
    });
    return (
      <div className="board">
      { cards }
        <section className="new-card-form">
          <NewCardForm addCardCallback={this.addCard}/>
        </section>
      </div>
    )
  }

}

export default Board;
