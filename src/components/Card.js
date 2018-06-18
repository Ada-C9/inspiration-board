import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

function convertToemoji(anEmoji){
  if (anEmoji != null){
   return emoji.getUnicode(anEmoji)
  }
}


class Card extends Component {
   findID = () => {
     this.props.deleteCard(this.props.id)
  }

  render() {
    return (
      <div className="card">
        <section className="card__content">
        <button className="card__delete" onClick={this.findID}>x</button>
        <p className="card__content-text">{this.props.text}</p>
        <p className="card__content-emoji">{convertToemoji(this.props.emoji)}</p>
        </section>
      </div>
    )
  }
}

Card.propTypes = {
  text:PropTypes.string.isRequired,
  emoji:PropTypes.string,
  id:PropTypes.number,
};

export default Card;
