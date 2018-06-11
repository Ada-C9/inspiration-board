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
      cards: [
        {
          card: {
            id: 93,
            text: "Go Get'em!",
            emoji: "beer"
          }
        },
        {
          card: {
            id: 58,
            text: "asdf",
            emoji: "beer"
          }
        },
        {
          card: {
            id: 57,
            text: "asdf",
            emoji: "heart_eyes_cat"
          }
        },
        {
          card: {
            id: 41,
            text: "Skate ipsum dolor sit amet, rail soul skate griptape impossible Steve Olson. Fast plant Andy Howell locals risers full pipe. Betty grind manual hip Dylan Rieder. Darkslide Japan air nose grab baseplate. Bank boardslide varial layback Andrew Reynolds. Tuna-flip disaster Omar Hassan boardslide wax. Vision grind baseplate bigspin rocket air. Poseur acid drop Transworld kickflip no comply. OJ IIs cess slide g-turn slide hang ten.",
            emoji: "dog"
          }
        },
        {
          card: {
            id: 39,
            text: "Areallyreallyreallylongword",
            emoji: "heart_eyes_cat"
          }
        },
        {
          card: {
            id: 38,
            text: "Another test",
            emoji: "heart_eyes"
          }
        },
        {
          card: {
            id: 37,
            text: "Some test text",
            emoji: ""
          }
        },
        {
          card: {
            id: 26,
            text: "RAAAAD",
            emoji: "clap"
          }
        },
        {
          card: {
            id: 25,
            text: "GREAT",
            emoji: "heart_eyes_cat"
          }
        },
        {
          card: {
            id: 24,
            text: "GOOD",
            emoji: "dog"
          }
        },
        {
          card: {
            id: 23,
            text: "NICE",
            emoji: "beer"
          }
        },
        {
          card: {
            id: 22,
            text: "",
            emoji: "heart_eyes"
          }
        },
        {
          card: {
            id: 20,
            text: "",
            emoji: "heart_eyes_cat"
          }
        },
        {
          card: {
            id: 12,
            text: "you are enough",
            emoji: null
          }
        },
        {
          card: {
            id: 4,
            text: "Look for the helpers",
            emoji: null
          }
        },
        {
          card: {
            id: 2,
            text: "BE EXCELLENT TO EACHOTHER",
            emoji: null
          }
        },
        {
          card: {
            id: 1,
            text: "100",
            emoji: null
          }
        }
      ],
    };
  }

  render() {
    const cards = this.state.cards.map((cardInfo, index) => {
      return <Card
        key={index}
        text={cardInfo.card.text}
        emoji={cardInfo.card.emoji}
      />
    });
    return (
      <section className="board">
        { cards }
      </section>
    )
  }

}

Board.propTypes = {

};

export default Board;
