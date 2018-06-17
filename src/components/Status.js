import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Alert extends Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
  }
  render () {
    return (
      <section className={`validation-errors-display ${this.props.type}` }>
        {this.props.type === 'error' ? "There was a problem :" : ""}
        {this.props.message}
      </section>
    )
  }
}
