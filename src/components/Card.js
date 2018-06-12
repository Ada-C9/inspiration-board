import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends React.Component {

  render() {
    return (
      <section>
        <div className="card">
          <button className="card__delete">Delete</button>
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
  emoji: PropTypes.string
};

export default Card;
