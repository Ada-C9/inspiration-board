import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      boards: [],
    };
  }

  componentDidMount() {
    axios.get('https://inspiration-board.herokuapp.com/boards')
      .then((response) => {
        this.setState({
          boards: response.data.map((board, index) => {
            return (
              <option>{board.board.name}</option>
            );
          })
        });
      })

      .catch((error) => {
        this.props.updateStatusCallback(error.message, 'error');
      });

  }

  render() {
    return (
      <select className='dropdown'>
        { this.state.boards}
      </select>
    );
  }

}

Dropdown.propTypes = {

}

export default Dropdown;
