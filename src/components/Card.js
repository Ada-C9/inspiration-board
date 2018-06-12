import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    deleteCardCallback: PropTypes.func.isRequired
  }

  deleteHelper = () => {
    let cardID = this.props.id;
    this.props.deleteCardCallback(cardID)
  }

  render() {

    return (

      <section className='card'>
        <div className="card__content">

          <div className='card__content-text'>
            {this.props.text}
          </div>

          <div className='card__content-emoji'>
            {this.props.emoji}
          </div>

          <button onClick={this.deleteHelper}>
            Delete
          </button>

        </div>
      </section>
    )
  }
}

export default Card;
