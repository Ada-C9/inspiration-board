import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'

class BoardSelection extends React.Component {

	static propTypes = {
		updateBoardCallback: PropTypes.func.isRequired,
		url: PropTypes.string.isRequired,
		board: PropTypes.string
	}

	constructor(){
		super();
		this.state = {
			boards: []
		}
	}

	componentDidMount(){
		axios.get(this.props.url)
		.then((response) => {

			const updatedNames = response.data.map((obj, index) => {
				return obj.board.name
			});

			this.setState({
				boards: updatedNames
			})
		})
		.catch((error) => {

		});
	}
	onBoardUpdate = (event) => {
		console.log("in update!");
		this.props.updateBoardCallback(event.target.value);
		this.setState({
			board: event.target.value
		})
	}

	render(){
		const selectOptions = this.state.boards.map((board, index) => {
			return <option key={index} value={board}>{board}</option>
		});

		return (
			<select
				onChange={this.onBoardUpdate}
				selected={this.props.board}
				>
				<option value="" disabled selected hidden>Choose a Board</option>
				{selectOptions}
			</select>
		)
	}





}



export default BoardSelection;
