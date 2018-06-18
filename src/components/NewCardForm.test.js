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
        console.log(textField)

    // Act
    textField.simulate('change', {
      target: {
        name: 'text',
        value: 'Porkchop Power!',
      },
    });
    console.log(textField)

    wrapper.update();

    textField = wrapper.find('textarea[name="text"]');
    console.log(textField)

    expect(textField.getElement().props.value).toEqual('Porkchop Power!');

  });

});
