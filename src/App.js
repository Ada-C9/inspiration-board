import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Ada&apos;s Inspiration Board</h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Ada-Lovelace`}
          />
      </div>
    );
  }
}

export default App;
