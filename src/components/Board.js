import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';



class Board extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    boardName: PropTypes.string.isRequired
  }

  constructor() {
    super();

    this.state = {
      cards: [],
      status: {
        message: "successfuly loaded",
        type: "success"
      }
    };
  }




  componentDidMount() {

    let url_boards = this.props.url;
    let board_name = this.props.boardName;

    axios.get(`${url_boards}/${board_name}/cards`).then((response) =>{
      console.log("success");
      console.log(response);



      const my_data = response.data.map((card) =>{
        return {text: card.card.text,
          emoji: card.card.emoji
        };


      });

console.log(my_data);

      this.setState({cards: my_data})


    })


  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      return <Card key={index}
      text = {card.text}
      emoji = {card.emoji}
      />
    }
    )


    return (
      <div className="board">
      {cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
