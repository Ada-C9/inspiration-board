import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  getEmoji = () => {
    if (this.props.emoji) {
      this.emoji = emoji.getUnicode(this.props.emoji);
      return <p className="card__content-emoji">{this.emoji}</p>
    }
  }

  deleteClicked = () => {
    this.props.deleteCardCallback(this.props.id);
  }

  render() {
    return (
      <article className="card">
        <div className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          {this.getEmoji()}
        </div>
        <span className="card__delete" onClick={this.deleteClicked}>x</span>
      </article>
    )
  }
}

Card.propTypes = {
 text: PropTypes.string.isRequired,
 emoji: PropTypes.string,
 id: PropTypes.number,
 deleteCardCallback: PropTypes.func
};

export default Card;
