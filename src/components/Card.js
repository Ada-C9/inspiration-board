import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  let onClickHandler = () => {
    props.deleteCallback(props.index, props.id);
  }

  return (
    <section className="card">
      <button
      className="card__delete"
      onClick={ onClickHandler }>X</button>

      <div className="card__content">
        <h1 className="card__content-text">
          {props.text}
        </h1>

        <h1 className="card__content-emoji">
          {emoji.getUnicode(`${props.emoji}`)}
        </h1>
      </div>
    </section>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.number,
  deleteCallback: PropTypes.func
};

export default Card;
