import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

describe('Board', () => {
  test('with not a working URL', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const boardComponent = shallow(<Board
      url=""
      boardName=""
    />);

    // Assert that it looks like the last snapshot
    expect(boardComponent).toMatchSnapshot();
  });

  test('with a working URL', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const boardComponent = shallow(<Board
      url="https://inspiration-board.herokuapp.com/boards/"
      boardName="taco"
    />);

    // Assert that it looks like the last snapshot
    expect(boardComponent).toMatchSnapshot();
  });
});
