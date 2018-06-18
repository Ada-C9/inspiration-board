import React from 'react';
import Card from './Board';
import { mount, shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount( <Card updateStatusCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });
  test('idk', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
});
