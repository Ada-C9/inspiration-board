import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {

  const cards = [
    {
       "card": {
           "id": 93,
           "text": "Go Get'em!",
           "emoji": "beer"
       }
   },
   {
       "card": {
           "id": 41,
           "text": "Skate ipsum dolor sit amet",
           "emoji": "dog"
       }
   }]
   
  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Ada-Lovelace`}
          />
      </section>
    );
  }
}

export default App;
