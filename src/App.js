import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status'

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentBoard: 'kat',
      previousBoard: '',
      status: {
        message: 'Loading post-its',
        type: 'success'
      }
    }
  }

  updateStatus = (message, type) => {
    this.setState({
      status: {
        message: message,
        type: type
      }
    })
  }

  changeBoard = (board) => {

    let updateState = Object.assign({}, this.state);
    updateState['previousBoard'] = this.state.currentBoard;
    updateState['currentBoard'] = board.boardName;

    this.setState(updateState);
  }

  render() {
    return (
      <section>
        <header className="header">
          <Status
            message={this.state.status.message}
            type={this.state.status.type}
            />
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>

        </header>
        <Board key=""
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={this.state.currentBoard}
          changeBoardCallback={this.changeBoard}
          updateStatusCallback={this.updateStatus}
          />
      </section>
    );
  }
}

export default App;
