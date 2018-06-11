import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {



  render() {
    return (
      <div className="card">
      {this.props.text}
      {emoji.getUnicode(`${this.props.emoji}`)}
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;

// https://inspiration-board.herokuapp.com/boards/:board_name/cards/:card_id
