import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

// import CARD_DATA from '../data/card-data.json';
// import Status from './Status';

const Cards_URL = 'https://inspiration-board.herokuapp.com/boards/Dikla/cards'
class Board extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    updateStatusCallback: PropTypes.func
  };

  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }



  addCard = (cardInfo) => {
    console.log(cardInfo);
    axios.post(Cards_URL, cardInfo)
    .then((response) => {
      console.log(response.data);
      this.props.updateStatusCallback(`Successfully added card ${ response.data.card.id}!`, 'success');

      let updatedData = this.state.cards;
      updatedData.push(response.data);
      this.setState({cards: updatedData});
    })
    .catch((error) => {
      this.props.updateStatusCallback(`Error adding card ${ cardInfo.id }.`, 'error');
      this.setState({ error: error.message });
    });
  }

  deleteCard = (index, id) => {
    let updatedCards = this.state.cards;
    updatedCards.splice(index, 1);
    this.setState({cards: updatedCards});

    let DELETE_URL = 'https://inspiration-board.herokuapp.com/boards/' + `Dikla/cards/${id}`;
    axios.delete(DELETE_URL)
    .then((response) => {
      console.log(response);
      this.props.updateStatusCallback('Successfully deleted card...', 'success')
    })
    .catch((error) => {
      this.props.updateStatusCallback(error.message, 'error')
    });
  }


  componentDidMount() {
    this.props.updateStatusCallback('Loading cards...', 'success')
    axios.get(Cards_URL)
    .then((response) => {
      console.log("success");
      console.log(response);

      this.props.updateStatusCallback('Successfully load cards...', 'success')
      const cards = response.data
      this.setState({ cards: cards });
    })
    .catch((error) => {
      console.log("Error: (')");
      console.log("error");

      this.props.updateStatusCallback(error.message, 'error')

    });
  }



  render() {
    const cards = this.state.cards.map((card, index) => {
      return <Card key={index} index={index}
      id={card.card.id}
      text={card.card.text}
      emoji={card.card.emoji}
      deleteCallback={this.deleteCard}
      />
    });




    return (
      <section>
      <NewCardForm addCardCallback={this.addCard}/>
        <div className="board">
        {cards}
        </div>
      </section>
      )
    }

  }

  Board.propTypes = {

  };

  export default Board;
