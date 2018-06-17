import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardText: "INSPIRATION! THAT'S WHAT THIS IS!",
      cardEmoji: emoji.getUnicode('heart')
    }
  }

  tick() {
   this.setState({count: this.state.count + 1});
 }

  addCardEmoji = (emoji) => {
    if (this.props.emojiDesc){
      this.setState(
        {
          cardEmoji: emoji.getUnicode(this.props.emojiDesc)
        }
      );
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card_content" >
          <div className="card_content-text" >
            <p>{this.state.cardText}</p>
            <p> WHATEVER </p>
          </div>
          <div className="card_content-emoji" >
            {emoji.getUnicode('grimacing')}
            <p>{this.state.cardEmoji}</p>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  cardText: PropTypes.string.isRequired,
  emojiDesc: PropTypes.string,
};

export default Card;
