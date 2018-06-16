import React from 'react';
import PropTypes from 'prop-types'

class Status extends React.Component {
	static propTypes = {
		message: PropTypes.string,
		type: PropTypes.string
	}
	render(){
		return (
			<div>
				<h2>THIS IS A STATUS</h2>
				<h2>and message: {this.props.message}</h2>
				<h2>and type: {this.props.type}</h2>
			</div>
		)
	}
}

export default Status;
