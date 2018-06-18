import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  renderEmoji = () => {
    if (this.props.emoji) {
      return (
        <p>{emoji.getUnicode(this.props.emoji)}</p>
      );
    }
  }

  onClickDelete = () => {
    this.props.deleteCardCallback(this.props.id);
  }

  pickColor = () => {
    if (this.props.id % 5 === 1) {
      return "card pink";
    } else if (this.props.id % 5 === 2) {
      return "card blue";
    } else if (this.props.id % 5 === 3) {
      return "card purple";
    } else if (this.props.id % 5 === 4) {
      return "card green";
    } else {
      return "card yellow";
    }
  }

  render() {
    return (
      <div className={this.pickColor()}>
        <section
          className="card__delete"
          onClick={this.onClickDelete}
          >
          X
        </section>
        <section className="card__content">
          <span className="card__content-text">{this.props.text}</span>
          <span className="card__content-emoji">{this.renderEmoji()}</span>
        </section>
      </div>
    )
  }

}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
