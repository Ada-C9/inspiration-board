import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  static propTypes = {
    text: PropTypes.string,
    emoji: PropTypes.string
  };

  render() {
    return (
      <section>
        <div className="card">
          <p>{this.props.text}</p>
          <p>{this.props.emoji}</p> 
        </div>

      </section>

    )
  }
}

Card.propTypes = {

};

export default Card;
