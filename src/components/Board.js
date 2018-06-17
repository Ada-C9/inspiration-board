import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import './Card.css';
import NewCardForm from './NewCardForm';


class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/<Abinnet-Ainalem>/cards')
    .then ((response) => {
      this.setState({
        cards: response.data
      })
    })
    .catch(() => {
      this.setState({
        error: 'Unable to view cards'
      })
    });
  }

  removeCard = (cardIndex) => {
    const deletedCardId = this.state.cards[cardIndex].card.id;

    axios.delete(`https://inspiration-board.herokuapp.com/boards/<Abinnet-Ainalem>/cards/${deletedCardId}`)

    .then (() => {
      this.state.cards.splice(cardIndex,1);
      this.setState({
        message: `Deleted card`,
      });
    })
    .catch(() => {
      this.setState({
        error: 'Unable to delete card'
      })
    });
  }

  addCard = (newCard) => {

    axios.post(`https://inspiration-board.herokuapp.com/boards/<Abinnet-Ainalem>/cards`, newCard)

    .then ((response) => {
      const cardList = this.state.cards;

      const cardObject = {
        card: response.data.card,
      }

      cardList.push(cardObject);
      this.setState({
        message: `Sucessfully added card`,
        cards: cardList,
      });
    })
    .catch(() => {
      this.setState({
        error: 'Unable to add card'
      })
    });
  }

  showCards = () => {
    const componentList = this.state.cards.map((card, index) => {
      return (
          <Card
            key={index}
            quote={card.card.text}
            emoji={card.card.emoji}
            removeCard={this.removeCard}
            index={index}
          />
      );
    });

    return componentList
  }

  render() {
    return (
      <div className="board">
        <div className="warning">
          <h5>{this.state.error}</h5>
        </div>

        <div className="message">
          <h5>{this.state.message}</h5>
        </div>
        <NewCardForm
          addCard={this.addCard}/>
          {this.showCards()}
      </div>
    )
  }

}

Board.propTypes = {
  cards: PropTypes.array
};

export default Board;
