import React from 'react';
import Board from './Board';
import { mount, shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    // Deep rendering
    const wrapper = mount( <Board />);

    // Assert that it looks like the last snapshot and if not, take a new one (?)
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });
});
