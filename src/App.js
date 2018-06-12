import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status';

class App extends Component {

  constructor() {
    super();

    this.state = {
      status: {
        message: 'loaded the page',
        type: 'success'
      }
    }
  }

  updateStatus = (message, type) => {
    this.setState({
      status: {
        message: message,
        type: type
      }
    })
  }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>

        <Status message={this.state.status.message} types={this.state.status.type} />

        <Board
          boardName={`Brandy-Austin`}
          updateStatusCallback={this.updateStatus}
          />
      </section>
    );
  }
}

export default App;
