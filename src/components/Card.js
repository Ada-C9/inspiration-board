import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';

import './Card.css';

class Card extends Component {
  static propTypes = {
    text: PropTypes.string,
    emoji: PropTypes.string,
    id: PropTypes.number,
  }

  // constructor(){
  //   super();
  //   this.state = {
  //     id: '',
  //   };
  // }

  onDeleteSubmit = (event) => {
    event.preventDefault();
    console.log('delete button clicked');
    console.log(event);
    axios.delete(` https://inspiration-board.herokuapp.com/boards/kiera-thomasson/cards/{this.props.id}`)// QUESTION: Where can I get the id from if it is an api
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
  }

  render() {
    let face = emoji.getUnicode(this.props.emoji || 'hugging face')
    return (
      <div className="card" >

        <div className="card__content">
          <p className="card__content-text">
            {this.props.text}
          </p>
          <p className="card__content-emoji">
            {face}
          </p>
        </div>
        <form onSubmit={this.onDeleteSubmit}>
          <button className="card__delete" type='submit'>delete</button>
        </form>


      </div>

    )
  }
}



export default Card;
