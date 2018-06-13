import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
    <p>{this.props.text}</p>
    <p>{emoji.getUnicode(this.props.emoji)}</p>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
