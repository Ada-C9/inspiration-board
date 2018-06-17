import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const hasEmoji = this.props.cardEmoji;
    let displayEmoji;
    if (hasEmoji) {
      displayEmoji = emoji.getUnicode(this.props.cardEmoji)
    } else { displayEmoji = "" }

    return (
      <div className="card">
        <div className="card_content" >
          <div className="card_content-text" >
            <p>{this.props.cardText}</p>
          </div>
          <div className="card_content-emoji" >
            <p>{displayEmoji}</p>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  cardText: PropTypes.string.isRequired,
  cardEmoji: PropTypes.string,
};

export default Card;
