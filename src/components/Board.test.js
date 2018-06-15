import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board'

describe('Board', () => {

  test('shallow mount', () => {
    const Board = shallow(
      <Board
      updateStatusCallback={()=>{}}/>
    );
    expect(Board).toMatchSnapshot();
  });
});
