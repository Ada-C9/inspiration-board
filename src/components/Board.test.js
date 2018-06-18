import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('That it matches an existing snapshot', () => {
    const board = shallow(
      <Board boardName={'testBoardName'} updateStatusCallback={() => {}} />
    );

    expect(board).toMatchSnapshot();

    board.unmount();
  });
});
