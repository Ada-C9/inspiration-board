import React from 'react';
import { mount, shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

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

  test('When a user types into the textarea in the form, the field is updated', () => {
    // Arrange
    // Shallow Mounted the wrapper
    const wrapper = shallow(<NewCardForm
      addCardCallback={() => {} }
      />);

    // find the input field
    let textField =
        wrapper.find('textarea[name="text"]');

    // Act
    textField.simulate('change', {
      target: {
        name: 'text',
        value: 'Porkchop Power!',
      },
    });

    wrapper.update();

    textField = wrapper.find('textarea[name="text"]');

    expect(textField.getElement().props.value).toEqual('Porkchop Power!');

  });

  test('When a user selects an emoji name from the dropdown, the relevant field is updated', () => {
    // Arrange
    // Shallow Mounted the wrapper
    const wrapper = shallow(<NewCardForm
      addCardCallback={() => {} }
      />);

    // find the input field
    let emojiField =
        wrapper.find('select[name="emoji"]');

    // Act
    emojiField.simulate('change', {
      target: {
        name: 'emoji',
        value: 'clap',
      },
    });

    wrapper.update();

    emojiField = wrapper.find('select[name="emoji"]');

    expect(emojiField.getElement().props.value).toEqual('clap');
  });

  test('addCardCallback prop is called when the form is submitted', () => {

    const mockAddCardCallback = jest.fn();
    const wrapper = shallow(<NewCardForm  addCardCallback={mockAddCardCallback}  />);

    const form = wrapper.find('form');

    wrapper.setState({
      text: 'Porkchop',
      emoji: 'beer',
    })

    // Act
    form.simulate('submit', {
      preventDefault: () => {},
    });
    wrapper.update();
    // Assert
    expect(mockAddCardCallback).toHaveBeenCalled();

});
