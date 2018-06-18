import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status';
import BoardSelection from './components/BoardSelection';

class App extends Component {

	constructor(){
		super();

		this.state = {
			status: {
				message: "this is a message",
				type: "and a type"
			},
			board: 'karinna',
			url: "https://inspiration-board.herokuapp.com/boards"
		}

	}

	updateStatus = (mess, typ) => {
		this.setState({
			status: {
				message: mess,
				type: typ
			}
		})
	}

	updateBoard = (name) => {
		this.setState({
			board: name
		});
	}


	render() {
		return (
			<section>
				<header className="header">
					<h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
				</header>

				<BoardSelection
					updateBoardCallback={this.updateBoard}
					url={this.state.url}
					/>

				<Status
					message={this.state.status.message}
					type={this.state.status.type}
					/>

				<Board
					url={this.state.url}
					name={this.state.board}
					updateStatusCallback={this.updateStatus}
					/>
			</section>
		);
	}
}

export default App;
