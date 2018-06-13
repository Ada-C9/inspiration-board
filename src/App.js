import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';

class App extends Component {
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <NewCardForm />
        <Board
          url="https://inspiration-board.herokuapp.com/boards/Hannah-Cameron/cards"
          boardName={`Ada-Lovelace`}
          />
      </section>
    );
  }
}

export default App;
