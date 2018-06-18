import React from 'react';
import Card from './Card';
import { mount } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount( <Card text='Inspirational Stuff' />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });

  test('that displays the text prop that is given', () => {
    // Arrange
    const wrapper = mount( <Card text='Something' />);
    const header = wrapper.find('h3');
    // Assert: check that the h3 inner text is 'Something'
    
    expect(header.text()).toEqual('Something');

    // Clean up, remove the component from the DOM
    wrapper.unmount();
  });
});
