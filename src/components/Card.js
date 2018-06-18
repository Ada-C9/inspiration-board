import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';

import './Card.css';

class Card extends Component {
  static propTypes = {
    text: PropTypes.string,
    emoji: PropTypes.string,
    id: PropTypes.number,
    deleteCardCallback: PropTypes.func,
    index: PropTypes.number
  }

  onDeleteClick = (event) => {
    console.log('delete button clicked');
    console.log(event.target.value);
    let index = event.target.value;
    let id = event.target.id
    this.props.deleteCardCallback( index, id);
  }

  render() {
    let face = emoji.getUnicode(this.props.emoji || 'hugging face')
    return (
      <div className="card" >

        <div className="card__content">
          <p className="card__content-text">
            {this.props.text}
          </p>
          <p className="card__content-emoji">
            {face}
          </p>
        </div>

          <button
            onClick={this.onDeleteClick}
            className="card__delete"
            type='submit'
            id={this.props.id}
            value={this.props.index}>delete</button>

      </div>

    )
  }
}



export default Card;
