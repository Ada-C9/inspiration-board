import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Status.css';

class Status extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    return (
      <section className={`status ${this.props.type}`}>
        { this.props.message }
      </section>
    );
  }
}

export default Status;
