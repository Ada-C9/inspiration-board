import React from 'react';
import PropTypes from 'prop-types'

class Status extends React.Component {
	static propTypes = {
		message: PropTypes.string,
		type: PropTypes.string
	}
	render(){
		return (
			<div className={`validation-errors-display ${this.props.type}`}>
				<h2>{this.props.message}</h2>
			</div>
		)
	}
}

export default Status;
