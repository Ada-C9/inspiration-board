import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

test('that it matches an existing snapshot', () => {
  // First Mount the Component in the testing DOM
  // Arrange
  const cardForm = shallow( <NewCardForm addCardCallback={() => {} } /> );

  // Assert that it looks like the last snapshot
  expect(cardForm).toMatchSnapshot();

  // Remove the component from the DOM (save memory and prevent side effects).
  cardForm.unmount();
});
