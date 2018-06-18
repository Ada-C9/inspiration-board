import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super();
    this.state = {
      cardId: props.cardID,
      cardWorden: props.cardText,
      cardEmoji: props.cardEmoji,
    }
  }

  handleDelete = event => {
    event.preventDefault();
    let deleteURL = `https://inspiration-board.herokuapp.com/boards/victoria/cards/${this.props.cardID}`
    axios.delete(deleteURL)
      .then(response => {
        console.log('response to API request is happening')
        console.log(response);
        console.log(response.data);
        console.log("about to reload")
        console.log(window.parent.location.href)
        window.parent.location.reload()
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {

    const hasEmoji = this.state.cardEmoji;
    let displayEmoji;
    if (hasEmoji) {
      displayEmoji = emoji.getUnicode(this.props.cardEmoji)
    } else { displayEmoji = "" }
    console.log('trying to report cardID')
    console.log(this.state.cardId)

    return (
      <div className="card">
        <div className="card_content">
          <div  className="card_content-text">{this.state.cardWorden}</div>
          <div className="card_content-emoji">{displayEmoji}</div>
          <div className="card_content-id">This is Quantum of Inspiration Number: {this.state.cardId}</div>
        </div>
        <form onSubmit={this.handleDelete} className="card_delete">
          <button type="submit">Delete This Card?</button>
        </form>
      </div>
    )
  }
}

Card.propTypes = {
  cardID: PropTypes.number,
  cardText: PropTypes.string,
  cardEmoji: PropTypes.string,
};

export default Card;
