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

  onDeleteClick = (event) => {
    event.preventDefault();
    console.log('delete button clicked');
    console.log(event.target.value);
    let target = event.target.value;
    axios.delete( 'https://inspiration-board.herokuapp.com/boards/kiera-thomasson/cards/'+ target)
      .then((response) => {
        console.log(response);
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
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

          <button onClick={this.onDeleteClick} className="card__delete" type='submit' value={this.props.id}>delete</button>

      </div>

    )
  }
}



export default Card;
