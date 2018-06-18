import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      message: 'has done nothing',
      error: "nothing is broken"
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`)
      .then((response) => {
        const cards = response.data.map(inputCard => inputCard.card);
        this.setState({ cards });
      })
      .catch((error) => {
        this.setState({ error: error.message});
      });
  }

  addCard = (card) => {

    axios.post(`${this.props.url}`, card)
      .then((response) => {
        let cards = this.state.cards;
        cards.push(response.data.card);
        this.setState({cards,
        message: 'working'});
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  removeCard = (index) => {
    const currCard = this.state.cards[index];
      axios.delete(`${this.props.url}${currCard['id']}`)
        .then((response) => {
          let updatedData = this.state.cards;
          updatedData.splice(index, 1);
          this.setState({cards: updatedData});
        })
        .catch((error) => {
          this.setState({ error: error.message });
        });
    };

  renderCardsList = () => {
    return this.state.cards.map((card, index) => {

      return (
        <Card
          key={card.id}
          index={index}
          text={card.text}
          emoji={card.emoji}
          removeCardCallback={this.removeCard}
        />
      )
    });
  };

  render() {
    return (
      <div className="board">
        {<NewCardForm
          addCardCallback={this.addCard}
        />}
        {this.renderCardsList()}
        </div>
    )
  }
}

Board.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Board;
