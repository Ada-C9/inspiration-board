import React, {Component} from 'react';

class Status extends Component {
  render(){
    return(
      <section className={`status ${this.props.type}`}>
      {this.props.message}
      </section>
    );
  }
}

export default Status;
