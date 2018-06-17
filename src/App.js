import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Board from './components/Board';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Lasiorhine`}
          />

      </section>
    );
  }
}

export default App;
