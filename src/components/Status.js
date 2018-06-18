import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
  }
  
  render() {
    return (
      <ul className="validation-errors-display__list">
        <li className="validation-errors-display">{this.props.message}</li>
      </ul>
    );
  }
}

export default Status;
