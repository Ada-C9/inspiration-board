import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
  }
  render() {
    let prefix = '';
    if (this.props.type === 'error') {
      prefix = "There was a problem: ";
    }
    return (
      <section className={`status ${this.props.type}`}>
        {prefix}
        {this.props.message}
      </section>
    );
  }
}

export default Status;
