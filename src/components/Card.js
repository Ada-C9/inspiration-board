import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
    text: PropTypes.string,
    emoji: PropTypes.string
  }
  // Card.propTypes = {
  //
  // };

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
        <button className="card__delete">delete</button>

      </div>

    )
  }
}



export default Card;
