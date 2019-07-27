import React from 'react';
import Board from './Board';
import { mount, shallow } from 'enzyme';

describe ('Board', () => {
  test('deep mount', () => {
    const boardComponent = mount(
      <Board updateStatusCallback={() => {} } />
    );

    expect(boardComponent).toMatchSnapshot();

    boardComponent.unmount();
  });

  test('shallow mount', () => {
    const boardComponent = shallow(
      <Board updateStatusCallback={() => {} } />
    );

    expect(boardComponent).toMatchSnapshot();

  });
});
