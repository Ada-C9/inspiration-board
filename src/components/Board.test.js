
import React from 'react';
import Board from './Board';
import { mount } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const board = mount( <Board url="https://inspiration-board.herokuapp.com/boards/" updateStatusCallback={); />

    // Assert that it looks like the last snapshot
    expect(board).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    board.unmount();
  });
});
