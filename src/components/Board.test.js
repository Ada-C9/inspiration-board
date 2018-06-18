import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

test('shallow mount', () => {
  const board = shallow(
    <Board url="https://inspiration-board.herokuapp.com/boards/" boardName={`test-board`} />
  );

  expect(board).toMatchSnapshot();
});
