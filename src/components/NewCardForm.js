import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["grinning", "grimacing", "grin", "joy", "rofl", "smiley", "smile", "sweat_smile", "laughing", "innocent", "wink", "blush", "slightly_smiling_face", "upside_down_face", "relaxed", "yum", "relieved", "heart_eyes", "kissing_heart", "kissing", "kissing_smiling_eyes", "kissing_closed_eyes", "stuck_out_tongue_winking_eye", "zany", "raised_eyebrow", "monocle", "stuck_out_tongue_closed_eyes", "stuck_out_tongue", "money_mouth_face", "nerd_face", "sunglasses", "star_struck", "clown_face", "cowboy_hat_face", "hugs", "smirk", "no_mouth", "neutral_face", "expressionless", "unamused", "roll_eyes", "thinking", "lying_face", "hand_over_mouth", "shushing", "symbols_over_mouth", "exploding_head", "flushed", "disappointed", "worried", "angry", "rage", "pensive", "confused", "slightly_frowning_face", "frowning_face", "persevere", "confounded", "tired_face", "weary", "triumph", "open_mouth", "scream", "fearful", "cold_sweat", "hushed", "frowning", "anguished", "cry", "disappointed_relieved", "drooling_face", "sleepy", "sweat", "sob", "dizzy_face", "astonished", "zipper_mouth_face", "nauseated_face", "sneezing_face", "vomiting", "mask", "face_with_thermometer", "face_with_head_bandage", "sleeping", "zzz", "poop", "smiling_imp", "imp", "skull", "ghost", "alien", "robot", "smiley_cat", "smile_cat", "joy_cat", "heart_eyes_cat"]


class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = {
      card: {
        text: '',
        emoji: ''
      }
    }
  }

  onInput = (event) => {
    let updatedMessage = {};
    updatedMessage[event.target.name] = event.target.value
    this.setState(updatedMessage)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addCardCallback(this.state);

    this.setState({
      card: {
        text: '',
        emoji: ''
      }
    });
  }

  render () {
    const emojiList = EMOJI_LIST.map((char, index) =>{
      return (
        <option
        key={index}
        value={char}>{char}</option>
      );
    })

    return (
      <section className="new-card-form">
      <form className="form" onSubmit={this.onFormSubmit}>

        <div className="new-card-form__header">
          NEW CARD FORM
        </div>

        <div className="new-card-form__label">
          <label
          htmlFor="text">Message </label>
          <input
          type="text"
          name="text"
          value={this.state.value}
          onChange={this.onInput}/>
        </div>

        <div className="new-card-form__select">
          Emoji
          <select
          value={this.state.value}
          onChange={this.onInput}
          name="emoji">
            {emojiList}
          </select>
        </div>

        <div>
          <input className="new-card-form__form-button" type="submit"/>
        </div>

      </form>
      </section>
    );
  }
}

export default NewCardForm;
