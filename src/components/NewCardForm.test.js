import React from 'react';
import NewCardForm from './NewCardForm';
import { mount } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount( <NewCardForm addCardCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });

  // NOTE: if we had additional props then we would want to test how they affect the render with additional snapshot tests

  // NOTE: But all we have is the addCardCallback which will not alter the appearance of the render, so we only need one snapshot comparison

  // NOTE: USER INTERACTION TESTS
  test('that it displays the user input in the text box', () => {
    // Arrange
    const wrapper = mount( <NewCardForm addCardCallback={() => {} } />);

    let textField = wrapper.find('input[name="text"]');

    // Act
    // pretend we changed it by simulating a change
    textField.simulate('change', {
      target: {
        name: 'text',
        value: 'New Stuff',
      },
    });

    // Force the component to update
    wrapper.update();
    // Find the updated component
    textField = wrapper.find('input[name="text"]');

    // Assert
    expect(textField.getElement().props.value).toEqual('New Stuff');
  });

  // NOTE:TODO: Write and Implement tests for Submit. Check that callback gets run
  test('that the text box is reset to blank when the form is submitted', () => {
    // Arrange
    const wrapper = mount( <NewCardForm addCardCallback={() => {} } />);

    let textField = wrapper.find('input[name="text"]');

    // Act
    // pretend we changed it by simulating a change
    textField.simulate('change', {
      target: {
        name: 'text',
        value: 'New Stuff',
      },
    });

    wrapper.update();

    let form = wrapper.find('form');

    // Act
    // pretend we changed it by simulating a submit
    form.simulate('submit');

    // Force the component to update
    wrapper.update();
    // Find the updated component
    textField = wrapper.find('input[name="text"]');

    // Assert
    expect(textField.getElement().props.value).toEqual('');
  });

  test('addCardCallback prop is called when the form is submitted', () => {
    const mockAddCardCallback = jest.fn();
    const wrapper = mount( <NewCardForm addCardCallback={mockAddCardCallback } />);
    const form = wrapper.find('form');

    // Act
    form.simulate('submit', {
      preventDefault: () => {},
    });
    wrapper.update();

    // Assert
    expect(mockAddCardCallback).toHaveBeenCalled();
    expect(mockAddCardCallback.mock.calls[0][0]).toEqual({
      text: ''
    });
  });
});
