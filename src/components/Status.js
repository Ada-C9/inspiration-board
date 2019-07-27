import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
  }


  render() {


    return (
      <section className="validation-errors-display validation-errors-display__list">
        {this.props.type === 'error' ? "There was a problem: " : ""}
        {this.props.message}
      </section>
    );
  }
}


export default Status;
