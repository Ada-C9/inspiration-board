import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {console.log(this.props)}
        {this.props.quote} {emoji.getUnicode(`${this.props.emoji}`)}
      </div>
    )
  }
}
  Card.propTypes = {
  quote: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
