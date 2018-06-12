import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }


  getEmoji = () => {
    if (this.props.emoji) {
      this.emoji = emoji.getUnicode(this.props.emoji);
      return <p className="emoji">{this.emoji}</p>
    }
  }

  deleteClicked = () => {
    this.props.deleteCardCallback(this.props.id);
  }

  render() {
    return (
      <article className="card">
        <button className="delete" id={this.props.id} onClick={this.deleteClicked}>
          x
        </button>
        <div className="content">
          <p className="text">{this.props.text}</p>
          {this.getEmoji()}
        </div>
      </article>
    )
  }
}

Card.propTypes = {
 text: PropTypes.string,
 emoji: PropTypes.string,
 id: PropTypes.number,
 deleteCardCallback: PropTypes.func
};

export default Card;
