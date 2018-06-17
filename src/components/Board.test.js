import React, { Component } from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Board
      url="https://inspiration-board.herokuapp.com/boards/"
      boardName={`mary`}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
