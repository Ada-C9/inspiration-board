import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    let query =  this.props.url + this.props.boardName + '/cards'
    console.log(query)

    axios.get(query)
      .then((response) => {
        console.log(response);
        this.setState({
          cards: response.data
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
        if (error.message) {
          this.renderError();
          console.log(error.message);
        }
      }
    );
  }

  deleteCard = (id, index) => {
    let url = this.props.url + this.props.boardName + '/cards/' + id
    console.log(id);
    axios.delete(url)
      .then((response) => {
        console.log(response);
        const updatedCards = this.state.cards
        delete updatedCards[index]
        this.setState({
          cards: updatedCards,
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
        if (error.message) {
          this.renderError();
          console.log(error.message);
        }
      });
  }

  addNewCard = (card) => {
    const cards = this.state.cards;
    const postUrl = this.props.url + this.props.boardName + '/cards/'

    axios.post(postUrl, card)
    .then((response) => {
      console.log(response);
      const cards = this.state.cards
      cards.unshift(response.data)
      this.setState({
        cards,
        message: 'Successfully Added New Card'
      });
      console.log(response);
    })
    .catch((error) => {
      this.setState({
        message: error.message
      });
    })
  }

  renderCardlist = () => {
    const cardList = this.state.cards.map((item, index) => {
      return(
        <Card
          key={index}
          index={index}
          id={item.card.id}
          text={item.card.text}
          emoji={item.card.emoji}
          deleteCardCallback={this.deleteCard}
        />
      )
    })
    return cardList
  }

  renderError = () => {
    return (
      <p className='validation-errors-dislay'>
        {this.state.error}
      </p>
    )
  }

  render() {
    return (
      <div>
        <NewCardForm addNewCardCallback={this.addNewCard} />
        <div className="board">
          {this.renderCardlist()}
        </div>
      </div>

    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
