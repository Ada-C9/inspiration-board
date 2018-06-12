import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import cardData from './data/card-data.json'
import Status from './components/Status';

class App extends Component {
  constructor() {
    super();

    // Set state to the static data from props
    this.state = {
      cards: [],
      status: {
        message: 'loaded the page',
        type: 'success'
      }
    };
  }

  updateStatus = (message, type) => {
    this.setState({
      status: {
        message: message,
        type: type
      }
    });
  }
  render() {
        return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Status
        message={this.state.status.message}
        type={this.state.status.type}
      />
      <Board updateStatusCallback={this.updateStatus}/>
      </section>
    );
  }
}

export default App;
