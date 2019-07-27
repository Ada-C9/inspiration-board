import React from 'react';
import NewCardForm from './NewCardForm';
import { mount, shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount(
      <NewCardForm addCardCallback={() => {} } />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });

  test('keeps track of user input', () => {
    const value = "new text value";
    const cardForm = shallow(
      <NewCardForm addCardCallback={() => {} } />
    );

    let textInput = cardForm.find('input[name="text"]');

    textInput.simulate('change', {
      target: {
        name: 'text',
        value: value
      }
    });

    cardForm.update();

    textInput = cardForm.find('input[name="text"]');

    expect(textInput.getElement().props.value).toBe(value);
  });
});
