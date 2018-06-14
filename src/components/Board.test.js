import React from 'react';
import Board from './Board';
import { mount } from 'enzyme';

describe('Board', () => {
  test('that it matches the snapshot with no cards', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount( <Board data={[]} />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });

  test('that it matches the snapshot with cards', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const cardData = [
      {
        text: 'Inspirational Stuff'
      },
      {
        text: 'Calming Words'
      },
    ];
    const wrapper = mount( <Board data={cardData} />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });
});
