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
    const cardObject = {
      card: newCard,
    }

    const updatedCardList = this.state.cards;
    updatedCardList.push(cardObject);

    this.setState({
      message: `Creating new inspiration...`,
    });

    axios.post(`https://inspiration-board.herokuapp.com/boards/<Abinnet-Ainalem>/cards`, newCard)

    .then (() => {
      this.setState({
        message: `Sucessfully added card`,
        cards: updatedCardList,
      });
      // I want the page to refresh, b/c I cant delete a recently added card without refreshing the page...even though i wait a couple of minutes for the api call to post
    })
    .catch(() => {
      this.setState({
        error: 'Unable to add card'
      })
    });
  }

  showCards = () => {
    const list = this.state.cards.map((card, index) => {
      return (
        <div key={index + 1}>
          <Card
            quote={card.card.text}
            emoji={card.card.emoji}
            removeCard={this.removeCard}
            index={index}
          />
        </div>
      );
    });
    return list
  }

//says I have reached the max num of setStates...I just want to clear the state messages/error after they have been called
  // clearMessages () {
  //   this.setState({
  //     error: '',
  //     message: '',
  //   });
  // }

  render() {
    return (
      <div>
        <div className="callout-colors-example">
          <div className="warning">
            <h5>{this.state.error}</h5>
          </div>
          <div className="message">
            <h5>{this.state.message}</h5>
          </div>
          <NewCardForm
            addCard={this.addCard}/>
        </div>
        <div className="board">
          {this.showCards()}
        </div>
      </div>
    )
  }

}

Board.propTypes = {
  cards: PropTypes.array
};

export default Board;
