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
              board.board.name
            );
          })
        });
      })

  }

  render() {
    return (
      <h3>Dropdown Goes Here</h3>
    );
  }

}

Dropdown.propTypes = {

}

export default Dropdown;
