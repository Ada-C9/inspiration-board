import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status';

class App extends Component {
  constructor() {
    super();

    this.state = {
      status: {
        message: '',
        type: ''
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

  render() {
    return (
      <section>
      <header className="header">
      <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <section>
      <Status message={this.state.status.message}
      type={this.state.status.type}
      />
      </section>
      <Board
      url="https://inspiration-board.herokuapp.com/boards/AnaLisa"
      updateStatusCallback={this.updateStatus}
      />
      </section>
    );
  }
}

export default App;
