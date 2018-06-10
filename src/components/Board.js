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
      cards: [],
      message: '',
    };
  }

  componentDidMount() {
    this.setState({
      message: 'Loading Cards',
    });

    axios.get(`${this.props.url}${this.props.boardName}/cards`)
    .then((response) => {
      const cards = [];
      response.data.forEach((card) => {
        cards.push({
          text: card.card.text,
          emoji: card.card.emoji,
          id: card.card.id,
        });
      });
      this.setState({
        cards,
        message: '',
      });
    })
    .catch((response) => {
      this.setState({
        message: `Error: ${response.data}`,
      })
    });
  }

  getCards = () => {
    return this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          text={card.text}
          emoji={card.emoji}
          deleteCardCallback={this.deleteCard}
          id={card.id === undefined ? -1: card.id}
          />
      );
    });
  }



  renderFieldValidationErrors = (field, errorArray) => {
    const list = errorArray.map((message, index) => {
      return (
        <li key={`${field}-${index}`}>
          {message}
        </li>
      )
    });
    return (
      <div>
        <strong>{field}:</strong>
        <ul className="validation-errors-display__list">
          {list}
        </ul>
      </div>
    );
  }

  renderValidationErrors = (responseData) => {
    if (responseData['errors']) {

      const validationErrors = responseData['errors']
      const errorList = Object.keys(validationErrors).map((field) => {
        return (
          <div key={`${field}`}>
            {this.renderFieldValidationErrors(field, validationErrors[field])}
          </div>
        );
      });
      return (
        <div>
          {errorList}
        </div>
      );
    }
    else {
      return (
        <div />
      )
    }
  }

  deleteCard = (cardId) => {
    const cards = this.state.cards.filter((card) => card.id !== parseInt(cardId, 10))
    this.setState({
      cards,
    });
    axios.delete(`${this.props.url}${this.props.boardName}/cards/${cardId}`)
    .then(() => {
      this.setState({
        message: 'Card deleted',
      })
    })
    .catch(() => {
      this.setState({
        message: 'Cannot delete card',
      });
    });
  }


  addCard = (card) => {

    axios.post(`${this.props.url}${this.props.boardName}/cards`, card)
    .then((response) => {
      console.log(response);
      card.id = response.data.card.id;

      this.setState({
        cards,
      });
    })
    .catch((error) => {
      console.log(error);

      const message = (
        <div>
          <p>Cannot Add the Card</p>
          {this.renderValidationErrors( error.response.data)}
        </div>
      )
      this.setState({
        message,
      });
    });
    const cards = this.state.cards;
    cards.push(card);

    this.setState({
      cards,
      mode: 'DISPLAY',
    });

  }

  hideCard = () => {
    this.setState({
      mode: 'DISPLAY',
    });
  }
  displayMessage = () => {
    if (this.state.message === '') {
      return (
        <div />
      );
    }
    return (
      <div>
        <h3>{this.state.message}</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        <section className="validation-errors-display">{this.state.message}</section>

        <NewCardForm
          addCardCallback={this.addCard}
          hideFormCallback={this.hideCard}
          />

        <main className="board">
          {this.getCards()}


        </main>
      </div>
    );
  }
}

Board.propTypes = {
  boardName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Board;
