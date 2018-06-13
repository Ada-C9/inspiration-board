import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Board from './components/Board';
import Status from './components/Status';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boardName: 'Ada-Lovelace',
      boards: [],
      boardsUrl: 'https://inspiration-board.herokuapp.com/boards/',
      status: {
        message: 'Successfully loaded the page',
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

  componentDidMount() {
    this.updateStatus('Retrieving inspirational boards', 'success');

    axios.get(this.state.boardsUrl)
      .then((response) => {
        this.updateStatus('Successfully retrieved all boards', 'success');
        let updatedBoards = response.data.map((boardInfo) => {
          return boardInfo.board;
        });
        this.setState({
          boards: updatedBoards
        });
      })
      .catch((error) => {
        this.updateStatus(`There was a problem retrieving the boards: ${error.message}`, 'error');
      });
  }

  onBoardSelectionChange = (event) => {
    let updatedBoardName = {
      boardName: event.target.value
    };
    this.setState(updatedBoardName);
  }

  render() {
    const boardOptions = this.state.boards.map((board) => {
      return <option key={board.id}>{board.name}</option>
    });
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Status
          message={ this.state.status.message }
          type={ this.state.status.type }
        />
        <form>
          <select
            className="new-card-form__form-select"
            onChange={ this.onBoardSelectionChange }
            value={ this.state.boardName }
          >
            {boardOptions}
          </select>
        </form>
        <Board
          url={ this.state.boardsUrl }
          boardName={ this.state.boardName }
          updateStatusCallback={ this.updateStatus }
          />
      </section>
    );
  }
}

export default App;
