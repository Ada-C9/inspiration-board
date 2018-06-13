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
      // cards: [
      //   {
      //     text:"foo",
      //     emoji:'grinning'
      //   },
      //   {
      //     text:"bar",
      //     emoji:'cry'
      //   }
      // ],
    };
  }

//   fields.forEach(({field, value}) => {
//
//   // let nameField = wrapper.find(`[name="${field}"]`);
//   let nameField = wrapper.find(`input[name="${field}"]`);
//   nameField.simulate('change', {target: {
//       name: field,
//       value,
//     }});
//   wrapper.update();
//   // nameField = wrapper.find(`[name="${field}"]`);
//   nameField = wrapper.find(`input[name="${field}"]`);
//   expect(nameField.getElement().props.value).toEqual(value);
// });
  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards/kirsten/cards')
      .then((response) => {
        console.log(response.data);
        const cards = response.data.map(inputCard => inputCard.card);

        this.setState({
          cards: cards
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
      });
  }

  // componentDidMount() {
  //   axios.get('https://inspiration-board.herokuapp.com/boards/kirsten/cards')
  //     .then((response) => {
  //       console.log(response.data);
  //
  //       const cards = response.data.map(inputCard => inputCard.card);
  //       console.log(cards);
  //       this.setState({
  //         cards: response.data
  //       });
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         error: error.message
  //       });
  //     });
  //   // console.log("foo");
  //   // console.log(this.state.cards.valueOf());
  //   // console.log(this.state.cards);
  // }
  // componentDidMount() {
  //   axios.get('https://inspiration-board.herokuapp.com/boards/kirsten/cards')
  //     .then((response) => {
  //       // console.log("bar");
  //       const cards = response.data.map(thing => thing.card);
  //       console.log(cards);
  //
  //       let cardsBuilding = new Map();
  //
  //
  //       cards.forEach((inputCard) => {
  //         // console.log(Object.values(inputCard)[0]['id']);
  //         cardsBuilding.set(inputCard['id'], Object.values(inputCard));
  //       });
  //
  //       // console.log({cardsBuilding});
  //       // this.    ssetState({
  //       //   cardsBuilding,
  //       // });
  //       //
  //       // console.log(this.state.cardsBuilding);
  //     })
  // }
  removeCard = (index) => {
    console.log(index);

    const currCard = this.state.cards[index];
    console.log('fooooo');
    console.log(currCard.values);
      axios.delete(`https://inspiration-board.herokuapp.com/boards/kirsten/cards/${currCard['id']}`)
        .then((response) => {
          // We can update the state so we don't need to make another GET request
          let updatedData = this.state.cards.splice(currCard['id'], currCard['id']);
          this.setState({cards: updatedData});
        })
        .catch((error) => {
          // Use the same idea we had in our GET request
          this.setState({ error: error.message });
        });
    };
  // renderCardsList = () => {
  //   return this.state.cards.map((card, index) => {
  //     return (
  //       <Card
  //         key={index}
  //         text={card.card.text}
  //         emoji={card.card.emoji}
  //       />
  //     )
  //   });
  // };
  renderCardsList = () => {
    // console.log(this.state.cards);
    return this.state.cards.map((card, index) => {
      console.log(card);

      return (
        <Card
          key={index}
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
        {this.renderCardsList()}
        </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
