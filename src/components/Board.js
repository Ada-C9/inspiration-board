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
          emoji: card.card.emoji,
          id: card.card.id
        };
      });
      this.setState({cards: my_data})
    })
  }


  deleteFromApi = (id) => {
    let url_boards = this.props.url;
    let board_name = this.props.boardName;
    axios.delete(`${url_boards}/${board_name}/cards/${id}`).then((response) =>{
      console.log("success");
      console.log(response);
      console.log(typeof id);

 let updatedArray = this.state.cards.filter((card)=> {
   console.log(typeof card.id);
   return card.id != id});
   console.log(updatedArray);


 // for (let i =0; i < this.state.cards.length; i++)
 //   if (this.state.cards[i].id === id) {
 //      updatedArray = this.state.cards.splice(i,1);
 //      break;
 //   }
      this.setState({cards: updatedArray})
      console.log(this.state.cards);

    })

  }

  render() {
    const cards = this.state.cards.map((card, index) => {
      return <Card key={index}
      text = {card.text}
      emoji = {card.emoji}
      id = {card.id}
      deleteFromApiCallback = {this.deleteFromApi}
      />
    }
  )


  return (
    <main>
    <NewCardForm/>
    <div className="board">
    {cards}
    </div>
    </main>
  )
}

}

Board.propTypes = {

};

export default Board;
