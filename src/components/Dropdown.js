import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Dropdown extends Component {
  constructor(){
    super();
    this.state = {
      value: 'phoebe'
    }
  }

  getBoardNames = () => {
    
  }

  changeValue = (event) => {

  }

  render(){
    return(
      <select value={this.state.value} onChange = { this.changeValue }>
        {

        }
      </select>
    );
  }
}

export default Dropdown;
