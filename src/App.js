import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <section>
        <h1 className="header"><span className="header__text">Inspiration Board</span></h1>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Ada-Lovelace`}
          />
      </section>
    );
  }
}

export default App;
