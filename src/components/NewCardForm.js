import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", '100',
  '1234',
  'grinning',
  'grimacing',
  'grin',
  'joy',
  'rofl',
  'smiley',
  'smile',
  'sweat_smile',
  'laughing',
  'innocent',
  'wink',
  'blush',
  'slightly_smiling_face',
  'upside_down_face',
  'relaxed',
  'yum',
  'relieved',
  'heart_eyes',
  'kissing_heart',
  'kissing',
  'kissing_smiling_eyes',
  'kissing_closed_eyes',
  'stuck_out_tongue_winking_eye',
  'zany',
  'raised_eyebrow',
  'monocle',
  'stuck_out_tongue_closed_eyes',
  'stuck_out_tongue',
  'money_mouth_face',
  'nerd_face',
  'sunglasses',
  'star_struck',
  'clown_face',
  'cowboy_hat_face',
  'hugs',
  'smirk',
  'no_mouth',
  'neutral_face',
  'expressionless',
  'unamused',
  'roll_eyes',
  'thinking',
  'lying_face',
  'hand_over_mouth',
  'shushing',
  'symbols_over_mouth',
  'exploding_head',
  'flushed',
  'disappointed',
  'worried',
  'angry',
  'rage',
  'pensive',
  'confused',
  'slightly_frowning_face',
  'frowning_face',
  'persevere',
  'confounded',
  'tired_face',
  'weary',
  'triumph',
  'open_mouth',
  'scream',
  'fearful',
  'cold_sweat',
  'hushed',
  'frowning',
  'anguished',
  'cry',
  'disappointed_relieved',
  'drooling_face',
  'sleepy',
  'sweat',
  'sob',
  'dizzy_face',
  'astonished',
  'zipper_mouth_face',
  'nauseated_face',
  'sneezing_face',
  'vomiting',
  'mask',
  'face_with_thermometer',
  'face_with_head_bandage',
  'sleeping',
  'zzz',
  'poop',
  'smiling_imp',
  'imp',
  'japanese_ogre',
  'japanese_goblin',
  'skull',
  'ghost',
  'alien',
  'robot',
  'smiley_cat',
  'smile_cat',
  'joy_cat',
  'heart_eyes_cat']

class NewCardForm extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      emoji: '',
    };
  }

  valid = () => {
    return this.state.text.length > 0;
    }

  clearForm = () => {
    this.setState ({
      text: '',
      emoji: '',
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.valid()) {
      this.props.addCardCallback(this.state);
      this.clearForm();
    }
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  render () {
    const emoji_selection = EMOJI_LIST.map((code, index) => {
      return <option key={index} value={code}>{emoji.getUnicode(code)}</option>;
    });
    return (
      <form className="new-card-form" onSubmit={this.onSubmit}>
      <h2 className="new-card-form__header">Add a card</h2>
      <div className="new-card-form__form">
      <label className="new-card-form__form-label" htmlFor="text">Text: </label>
      <input className="new-card-form__form-textarea"
      name="text"
      value= {this.state.text}
      onChange={this.onFieldChange}
      type="text"
      />
      </div>
      <div className="new-card-form__form">
      <label className="new-card-form__form-label"
      htmlFor="emoji">Emoji: </label>
      <select className="new-card-form__form-select" name="emoji" value={this.state.emoji} onChange={this.onFieldChange}>{emoji_selection}</select>
      </div>
      <div className="new-card-form__form">
      <input className="new-card-form__form-button" type="submit" value="Add Card" />
      </div>
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
