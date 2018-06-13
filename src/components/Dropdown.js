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
        // console.log(this.state.names);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  changeValue = (event) => {
    // console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
    this.props.getName(this.state.value);
  }

  render(){
    return(
      <select value={this.state.value} onChange = { this.changeValue }>
        {
          this.state.names.map((name)=>{
            return(
              <option key ={name} value = { name }>
                {name}
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
