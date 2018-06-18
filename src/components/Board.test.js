import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

describe('Board', () => {
  test('shallow mount', () => {
    const board = shallow(
      <Board
        url='some url'
        boardName='some board name'
        updateStatusCallback={() => {}}
      />
    );

    expect(board).toMatchSnapshot();
  });
});
