import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
     text: PropTypes.string,
     emoji: PropTypes.string,
     id:PropTypes.id


   }
onDeleteClick = (event) =>{
  event.preventDefault();
  this.props.removeCardCallback(this.props.id)
}

  render() {
    console.log(this.props)

    const text = this.props.text
    const myEmoji = emoji.getUnicode(this.props.emoji || "smile");

    return (
      <div className="card">
        <div className = "card__content">
        <p className = "card__content-text">{text}</p>
        <p className = "card__content-emoji">{myEmoji}</p>
      </div>
      <button onClick ={this.onDeleteClick} >Delete</button>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
