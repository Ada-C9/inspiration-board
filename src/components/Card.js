import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        Inspiration so much
        💯
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
