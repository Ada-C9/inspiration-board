import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Status.css';

class Status extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
  };

  render() {
    return(
      <section className={`${this.props.type}`}>
        {this.props.message}
      </section>
    );
  }
}

export default Status;
