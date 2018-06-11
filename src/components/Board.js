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
    let query = this.props.url + this.props.boardName + '/cards'
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
          // this.renderError();
          console.log(error.message);
        }
      });
  }

  renderCardlist = () => {
    const cardList = this.state.cards.map((item, index) => {
      return(
        <Card
          key={index}
          text={item.card.text}
          emoji={item.card.emoji}
        />
      )
    })
    return cardList
  }

  render() {
    return (
      <div>
        {this.renderCardlist()}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
