import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <section>
        <div className="card">
          Inspiration so much
          💯
        </div>
        <div className="card">
          more card
          🎃
        </div>
      </section>
    )
  }
}

Card.propTypes = {

};

export default Card;
