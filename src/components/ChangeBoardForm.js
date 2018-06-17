import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChangeBoardForm extends Component {

  static propTypes = {
    changeBoardCallback: PropTypes.func.isRequired,
    allBoards: PropTypes.array.isRequired,
    currentBoard: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      boardName: props.currentBoard
    }
  }

  onInputChange = (event) => {
    let updatedInput = Object.assign({}, this.state)

    updatedInput[event.target.name] = event.target.value;
    this.setState(updatedInput);
  }

  componentDidUpdate() {
    //only update the board if the boardName has changed
  if (this.props.currentBoard !== this.state.boardName) {
    this.props.changeBoardCallback(this.state)
  }
}

  render() {
    const BoardList = this.props.allBoards
    const selectBoard = BoardList.map((board, index) => {
      return <option key={index} value={board}>{board}</option>
    });

    return (
      <section className="change-board-form">
        <form className="change-board-form__form" onSubmit={this.onFormSubmit} >
          <label className="change-board-form__form-label"  htmlFor="boardName">Select a different Board: </label>
          <select className="change-board-form__form-select" name="boardName" value={this.state.boardName} onChange={this.onInputChange}>
            {selectBoard}
          </select>
          </form>
        </section>
      )
    }
  }
