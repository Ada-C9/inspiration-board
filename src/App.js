import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status';

class App extends Component {
	constructor() {
		super();

		this.state = {
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
	render() {
		return (
			<section>
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
					<Board
						url="https://inspiration-board.herokuapp.com/boards/"
						boardName={`wenjie`}
						updateStatusCallback={ this.updateStatus }
					/>
				</div>
			</section>
		);
	}
}

export default App;
