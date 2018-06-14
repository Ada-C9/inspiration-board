import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

// add onClick to button and create an Axios post that removes
// it from  the board




class Card extends Component {

  clickHandler = (event) => {
    console.log('Got click');
    console.log(event);
    console.log(this.props.id);
    console.log(this.props.index);

    this.props.cardCallback(this.props.index, this.props.id)

  }
  render() {
    return (
      <div className="card">
        <ul className="card__content">
        <li className="card__content-text card__content-text">{this.props.text}</li>
        <li className="card__content-emoji">{emoji.getUnicode(`${this.props.emoji}`)}</li>
        <li><button onClick={this.clickHandler}>Remove</button></li>
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string

};

export default Card;
