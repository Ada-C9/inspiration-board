import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status';
import Dropdown from './components/Dropdown';

class App extends Component {
  constructor() {
    super();

    this.state = {
      status: {
        message: 'loaded the page',
        type: 'success'
      },
      currentBoard: 'sam'
    }
  }

  updateStatus = (message, type) => {
    this.setState({
      status: {
        message: message,
        type: type
      },
    })
  }

  render() {

    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Dropdown />
        <Status
          message={this.state.status.message}
          type={this.state.status.type}
        />
        <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={this.state.currentBoard}
        updateStatusCallback={this.updateStatus}
        />
      </section>
    );
  }
}

export default App;
