import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';


class App extends Component {
  render() {
    //TEMP: DATA TO BE USED FOR GENERIC CARD RENDERING

    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/AnaLisa"
          />
      </section>
    );
  }
}

export default App;
