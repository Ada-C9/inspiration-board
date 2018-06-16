import React from 'react';
import Board from './Board';
import { mount, shallow } from 'enzyme';

describe('Board', () => {
  test('deep mount', () => {
    const petCollection = mount(
      <Board updateStatusCallback={()=>{}} />
    );

    expect(board).toMatchSnapshot();

    board.unmount();
  });

  test('shallow mount', () => {
    const board = shallow(
      <Board updateStatusCallback={()=>{}} />
    );

    expect(board).toMatchSnapshot();
  });
});
