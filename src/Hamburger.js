import React, { Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import './App.css';


const Drawer = styled.div`
position: absolute;
height: auto;
background: black;
width: 40vh;
left: ${props => props.left}vh;
z-index: 1;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
`;

const Link = styled.div`
cursor: pointer;
padding: 1em 1em 1em 3em;
color: white;
font-weight: bold;
`;

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleState: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.selectedBoard = this.selectedBoard.bind(this);
  }

  handleClick = () => {
    this.refs.container.classList.toggle('change');
    this.setState({
      toggleState: this.state.toggleState ? 0 : 1
    });
  }

  selectedBoard = (event) => {
    this.props.switchBoard(event.target.getAttribute('name'), event.target.getAttribute('value'))
    this.handleClick();
  }

  render() {
    return (
      <div id="parent">
      <div id="nav-bar">
      <div className="container" ref="container" onClick={this.handleClick}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />

      </div>
      </div>

      <Motion
      defaultStyle={{ left: -40 }}
      style={{
        left: spring(this.state.toggleState ? 0 : -40, {
          stiffness: 210,
          damping: 10
        })
      }}
      >
      {style => (
        <Drawer left={style.left} onClick={this.selectedBoard} >
        <Link name='jackie' value="Inspiration Board">Inspiration Board</Link>
        <Link name='jackie-todo' value="To Do List">To Do List</Link>
        </Drawer>
      )}
      </Motion>
      </div>
    );
  }
}
export default Hamburger;
