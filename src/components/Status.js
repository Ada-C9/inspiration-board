import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
	static propTypes = {
		message: PropTypes.string.isRequired,
		type: PropTypes.string
	}
  render() {
		return(
			<section className={ `status ${this.props.type}` }>
				{ this.props.message }
			</section>
		)
	}
}

export default Status;
