import React from 'react';
import NewCardForm from './NewCardForm';
import { mount } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // Arrange: First Mount the Component in the testing DOM
    const wrapper = mount( <NewCardForm addCardCallback={() => {} } />);

    // Asserts that looks like last snapshot
    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
