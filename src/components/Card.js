import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  onClickDelete = () => {
    this.props.deleteCardCallback(this.props.id);
  }

  render() {
    return (
      <div>
      <section
      className="card__delete"
      onClick={this.onClickDelete}
      >
      X
      </section>

      <div className="card">
      <div className="card__content">
      <p className="card__content-text" >{this.props.text}</p>
      <p className="card__content-emoji">{this.props.emoji && this.props.emoji.length > 0 ? emoji.getUnicode(this.props.emoji) : ""}</p>
      </div>
      </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
