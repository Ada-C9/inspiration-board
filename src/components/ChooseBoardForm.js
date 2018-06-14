import React, { Component } from 'react';
import PropTypes from 'prop-types';


const BOARD_LIST = ["wini", "brenda", "angelica", "dikla", "ari", "maria", "tor"]

class ChooseBoardForm extends Component {
static propTypes = {
getBoardNameCallback: PropTypes.func.isRequired
}

  constructor(){
    super();

    this.state = {
      board: "wini",
    };
  }



  onInputChange = (event) => {
    let updatedBoard = {};
    updatedBoard[event.target.name] = event.target.value;
    this.setState(updatedBoard);
  }


  onFormSubmit = (event) => {
  event.preventDefault();
  console.log(this.state);
  this.props.getBoardNameCallback(this.state);

 this.setState({
  board: "",
});

}

  render(){

console.log(this.props.boards);

let boardOptions = BOARD_LIST.map((my_board, key) => {
return <option key ={key} value={my_board} >{my_board}</option>
})




    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="board">Board</label>
          <select type="board"
          name="board"
          value={this.state.board}
          onChange={this.onInputChange}>
              {boardOptions}
          </select>
        </div>
        <div >
          <input type="submit"/>
        </div>


      </form>
    )
  }

}

export default ChooseBoardForm;
