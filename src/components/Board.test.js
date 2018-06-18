import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';


describe('Board', () => {
  test('shallow mount', () => {
    const board = shallow(
      <Board url="inspiration/board.com" boardName="BRENDA" updateStatusCallback={()=>{}} />
    );

    expect(board).toMatchSnapshot();


  });
})
