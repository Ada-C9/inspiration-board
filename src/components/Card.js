import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    id: PropTypes.number.isRequired,
    deleteCallback: PropTypes.func
  };

  removeCard = () => {
    this.props.deleteCallback(this.props.id)
  }

  render() {

    return (
      <section className="card">
        <article className="card__content">
          <div className="card__content-text">
            {this.props.text}
          </div>

          <div className="card__content-emoji">
            {emoji.getUnicode(`${this.props.emoji}`)}
          </div>

          <div>
            <button className="card__delete" onClick={this.removeCard}>Delete!</button>
          </div>
        </article>

      </section>
    )
  }
}

Card.propTypes = {

};

export default Card;
