import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

describe('Board', () =>{
  test('matches snapshot', () =>{
    const boardComponent = shallow(
      <Board
      url= 'some url'
      boardName= 'board name'
      updateStatusCallback={()=>{}} />
    );
    expect(boardComponent).toMatchSnapshot();
    boardComponent.unmount();
  });

  test('removes a card with clicked', () => {

  });
  test('adds a card when submitted', () => {

  });
})
