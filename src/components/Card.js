import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


const Card = (props) => {
  const onCardDelete = () => {
    props.deleteCallback(props.index, props.id);
  }
    return (
      <section className="card">
      <button className="card__delete" onClick={onCardDelete}>x</button>
      <div className="card__content">
        <h1 className="card__content-text">
          {props.text}</h1>
        <p className="card__content-emoji">
        {emoji.getUnicode(`${props.emoji}`)}</p>
      </div>
      </section>
    )
  }


Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCallback: PropTypes.func,
  id: PropTypes.number,
  index: PropTypes.number
};

export default Card;
