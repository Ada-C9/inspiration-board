import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
const URL = 'https://inspiration-board.herokuapp.com/boards/kirsten/cards/';

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          // url="https://inspiration-board.herokuapp.com/boards/"
          url={URL}
          // boardName={`kirsten`}
          />
      </section>
    );
  }
}

export default App;
