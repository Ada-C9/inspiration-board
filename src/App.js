import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  constructor() {
    super(); {

      this.state = {};
    }
  }

  setNotifications = (messages) => {
    if (messages.message || messages.error)  {
      this.setState(messages)
      this.displayNotifications();
    }
  }

  displayNotifications = () => {
    if (this.state.message) {
      return <p>{this.state.message}</p>
    }
    if (this.state.error) {
      return <p>{this.state.error}</p>
    }
  }

  render() {
    return (
      <section>
        {this.displayNotifications()}
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board notificationCallback={this.setNotifications} />
      </section>
    );
  }
}

export default App;
