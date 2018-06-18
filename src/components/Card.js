import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';
// NOTE: RENDERS OUT A SINGLE CARD

class Card extends Component {
  static propTypes = {
    deleteCardCallback: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
    // emoji: PropTypes.emoji.isRequired
  };

  handleDeleteClick = (event) => {
    console.log('Delete Button Clicked')
    console.log(event.target.value)
    let index = event.target.values
    let id = event.target.id
    this.props.deleteCardCallback(index, id);
  }

  render() {
    return (
      // <h2>{ this.props.emoji}</h2>
      <div className="card">
      <section className="card__content">
      <article className=".card__content-text">
      <h3>{ this.props.text }</h3>
      </article>
      </section>
      <button className="card__delete"
      onClick={this.handleDeleteClick}
      id={this.props.id}
      value={this.props.index}
      >Delete</button>
      </div>
    )
  }
}


export default Card;
