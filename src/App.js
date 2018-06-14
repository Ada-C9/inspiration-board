import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status';
import axios from 'axios';


const BOARDS_URL = "https://inspiration-board.herokuapp.com/boards";

class App extends Component {


	constructor() {
		super();

		this.state = {
			boardNames: [],
			boardName: '',
			status: {
				message: 'Loaded the page successfully',
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

	componentDidMount() {
		axios.get(BOARDS_URL)
		.then((response) => {
			let boards = response.data;
			const names = boards.map((board) => {
				return board.board.name
			})
			this.setState({ boardNames: names })
		})
		.catch((error) => {
			this.updateStatus( error.message, 'error')
		});
	}

	onSelectChange = (event) => {
		const newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	render() {
		const boardNames = this.state.boardNames.map((board, index) => {
			return <option key={ index } name="boardName" value={ board }>{ board }</option>
		})

		// console.log(this.state.boardName);

		return (
			<section className='body'>
				<header className="header">

					<h1 className="header__h1">
						<span className="header__text">Inspiration Board</span>
					</h1>
					{/* <img className="logo"
					src="http://www.thelogomix.com/files/imagecache/v3-logo-detail/cutie-cupcakes-logomix.png"
					alt="panda-logo"
				/> */}
			</header>

			<div>
				<Status
					message={ this.state.status.message }
					type={ this.state.status.type }
				/>
				<section className="board-list">Pick a board
					<select className='dropdown-list' onChange={ this.onSelectChange }
						value={ this.state.boardName }
						name="boardName">
						{ boardNames }
					</select>
				</section>
				<Board
					url="https://inspiration-board.herokuapp.com/boards/"
					boardName={ this.state.boardName }
					updateStatusCallback={ this.updateStatus }
				/>
			</div>
		</section>
	);
}
}

export default App;
