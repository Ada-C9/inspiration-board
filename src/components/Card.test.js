
import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const card = shallow( <Card addPetCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(card).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    card.unmount();
  });
});
