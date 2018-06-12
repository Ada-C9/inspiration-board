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
    boardName: PropTypes.string.isRequired,
    updateStatuscallback: PropTypes.func.isRequired
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

      this.props.updateStatusCallback(`Successfully all cards from ${board_name}!`, 'success');

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
      this.props.updateStatusCallback(`Successfully removed card ${id} from ${board_name}´s board!`, 'success')
      console.log(typeof id);

      let updatedArray = this.state.cards.filter((card)=> {
        console.log(typeof card.id);
        return card.id != id});
        console.log(updatedArray);

        this.setState({cards: updatedArray})
        console.log(this.state.cards);

      })

    }

    addCard = (card) => {
      let url_boards = this.props.url;
      let board_name = this.props.boardName;
      let updatedCards = this.state.cards;
      axios.post(`${url_boards}${board_name}/cards`, card).then((response) =>{
        console.log(response.data.card.id);

        this.props.updateStatusCallback(`Successfully added a new card to ${board_name}´s board!`, 'success')

        card.id = response.data.card.id
        console.log(card);
        updatedCards.push(card);

        this.setState({cards: updatedCards});

      })
      .catch((error) => {
        this.props.updateStatusCallback(error.message, 'error');
      });
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
      <NewCardForm addCardCallback={this.addCard}/>
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
