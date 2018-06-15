import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      names: [],
      value: 'phoebe'
    }
  }

  componentDidMount = () => {
    axios.get('https://inspiration-board.herokuapp.com/boards/')
      .then( (response) => {
        const nameArray = response.data.map((board) =>{
          return (board.board.name);
        });
        this.setState({
          names: nameArray
        });
      })
      .catch( (error) => {
        // console.log(error);
      });
  }

  changeValue = (event) => {
    // console.log(event.target.value);
    this.setState({
      value: event.target.value
    });

    this.props.getName(event.target.value);
  }

  render(){
    return(
      <select value={this.state.value} onChange = { this.changeValue }>
        {
          this.state.names.map( (name, index) => {
            return(
              <option key = { index } value = { name }>
                { name }
              </option>
            );
          })
        }
      </select>
    );
  }
}

Dropdown.propTypes = {
  getName: PropTypes.func.isRequired
}

export default Dropdown;
