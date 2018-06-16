import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Dropdown.css';

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      boards: [],
      value: 'sam'
    };
  }

  onDropdownChange = (event) => {
    this.setState({
      value: event.target.value
    });
    this.props.updateBoardCallback(event.target.value);
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards')
      .then((response) => {
        this.setState({
          boards: response.data.map((board, index) => {
            return (
              <option key={index} value={board.board.name}>{board.board.name}</option>
            );
          })
        })
      })
    }

  render() {
    return (
      <div>
        <h3>Select a Board: </h3>
        <select className='dropdown' onChange={ this.onDropdownChange }>
          { this.state.boards }
        </select>
      </div>
    );
  }

}

Dropdown.propTypes = {
  updateBoardCallback: PropTypes.func.isRequired
};

export default Dropdown;
