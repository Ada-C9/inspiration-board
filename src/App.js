import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
// import Data from './data/card-data.json'
import Status from './components/Status';
import axios from 'axios';



const Board_url = 'https://inspiration-board.herokuapp.com/boards';
class App extends Component {
  constructor() {
    super();

    // Set state to the static data from props
    this.state = {
      boardList: [],
      boardName: '',
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

  componentDidMount() {
    axios.get(Board_url)
    .then((response) => {
      console.log("success");
      console.log(response);

      const boards = response.data
      let name = boards.map((board) => {
        return board.board.name;
      });
      this.setState({ boardList: name });
    })
    .catch((error) => {
      console.log("Error: (')");
      console.log(error);


    });
  }

  onSelectChange = (event) => {
    let updatedInput = {};
    updatedInput[event.target.name] = event.target.value
     this.setState( updatedInput );
  }

  render() {
    const boardList = this.state.boardList.map((name, index) => {
      return <option key={index} value={name} >{name}</option>
    })
    return (
        <section className="body">
          <header className="header">
            <h1 className="header__h1"><span className="header__text">Inspiration Board 🤔</span></h1>
          </header>
        <Status
        message={this.state.status.message}
        type={this.state.status.type}
        />
        <div className="boardList">
        <h3>Pick a Board</h3>
        <select onChange={this.onSelectChange}
        name="boardName"
        value={this.state.boardName}
        >
          {boardList}
        </select>
        </div>
        <Board
         boardName={this.state.boardName}
         updateStatusCallback={this.updateStatus}/>
        </section>
    );
  }
}

export default App;
