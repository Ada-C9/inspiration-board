import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <NewCardForm />);
    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });
});
