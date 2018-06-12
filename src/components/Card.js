import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends React.Component {

  render() {
    {console.log('test')}
    return (
      <section>
        <div className="card">
          {this.props.text}
          {this.getEmoji(this.props.emoji)}
        </div>
      </section>
    )
  }

  getEmoji = (emojicon) => {
    return emoji.getUnicode(emojicon)
    //do something in here to get emoji.getUnicode(this.props.emoji) to work
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
