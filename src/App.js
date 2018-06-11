import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    const boardData = [
      {
        "card": {
          "id": 93,
          "text": "Go Get'em!",
          "emoji": "beer"
        }
      },
      {
        "card": {
          "id": 58,
          "text": "asdf",
          "emoji": "beer"
        }
      },
      {
        "card": {
          "id": 57,
          "text": "asdf",
          "emoji": "heart_eyes_cat"
        }
      }
    ];
    return (
      <section>
      <header className="header">
      <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
      url="https://inspiration-board.herokuapp.com/boards/"
      boardName={`Ada-Lovelace`}
      data={boardData}
      />
      </section>
    );
  }
}

export default App;
