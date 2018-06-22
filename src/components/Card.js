import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super();
  }

  onDelete = (event) => {
    event.preventDefault();
    let cardID = this.cardID;
    this.props.deleteCardCallback(this.props.cardID);
  }

  render() {
    return (
      <section>
        <div className="card">
          <button className="card__delete" onClick={this.onDelete}>Delete Card</button>
          <div className="card__content">
            <div className="card__content-text">{this.props.text}</div>
            <div className="card__content-emoji">{this.getEmoji(this.props.emoji)}</div>
          </div>
        </div>
      </section>
    )
  }

  getEmoji = (emojicon) => {
    return emoji.getUnicode(emojicon)
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  cardID: PropTypes.number,
  deleteCard: PropTypes.func
};

export default Card;
