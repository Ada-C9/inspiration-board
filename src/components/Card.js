import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

deleteCard = (event) => {
console.log('button clicked')
console.log(event)
// axios.post('https://inspiration-board.herokuapp.com/boards/leti/cards/:card_id', card)
//   .then((response) => {
//     // pet successfully added
//     petList.push(pet);
//     this.setState({
//       petList,
//       message: `Successfully Added ${pet.name}`
//     });
//   })
//   .catch((error) => {
//     // not successfull
//     this.setState({
//       message: error.message,
//     });
//
//   })
}

  render() {
    return (
      <section className="card">
        <article className="card__content">
          <div className="card__content-text">{this.props.text}</div>
          <div className="card__content-emoji">{emoji.getUnicode(`${this.props.emoji}`)}</div>
        </article>
        <button onClick={this.deleteCard} className="card__delete">X</button>
      </section>
    )
  }
}

Card.propTypes = {

};

export default Card;
