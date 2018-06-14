import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status'

class App extends Component {
  constructor(){
    super();

    this.state = {
      cards: [],
      status: {
        message: 'loaded page',
        type: 'Success'
      }
    };
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
      <section className="body" >
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <div className="validation-errors-display validation-errors-display__list">
        <Status
      message={this.state.status.message}
      types={this.state.status.type}
      />
      </div>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Ada-Lovelace`}
          updateStatusCallback={this.updateStatus}
          />
      </section>
    );
  }
}

export default App;
