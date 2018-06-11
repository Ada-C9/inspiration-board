import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import cardData from './data/card-data.json'

class App extends Component {
  render() {
    const cardComponents = < Board cards={cardData} />
    // const cardsData = [
    // {
    //     "board": {
    //         "id": 8,
    //         "name": "1"
    //     }
    // },
    // {
    //     "board": {
    //         "id": 34,
    //         "name": "13"
    //     }
    // },
    // {
    //     "board": {
    //         "id": 37,
    //         "name": "2"
    //     }
    // },
    // {
    //     "board": {
    //         "id": 46,
    //         "name": "4"
    //     }
    // }];

    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        {cardComponents}
        {/*<Board cards={cardsData} />
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Ada-Lovelace`}
          /> */}
      </section>
    );
  }
}

export default App;
