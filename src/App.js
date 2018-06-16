import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status'

class App extends Component {

	constructor(){
		super();

		this.state = {
			status: {
				message: "this is a message",
				type: "and a type"
			}
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

				<Board
					url="https://inspiration-board.herokuapp.com/boards/"
					boardName={`Ada-Lovelace`}
					updateStatusCallback={this.updateStatus}
					/>
			</section>
		);
	}
}

export default App;
