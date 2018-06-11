import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {


  getEmoji = () => {
    if (this.props.emoji) {
      this.image = emoji.getUnicode(this.props.emoji);
      return <p className="emoji">{this.image}</p>
    }
  }

  render() {
    return (
      <article className="card">
        <div className="content">
          <p className="text">{this.props.text}</p>
          {this.getEmoji()}
        </div>
      </article>
    )
  }
}

Card.propTypes = {
 text: PropTypes.string,
 emoji: PropTypes.string
};

export default Card;
