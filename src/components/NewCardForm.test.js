import React from 'react';
import NewCardForm from './NewCardForm';
import { mount, shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <NewCardForm addPetCallback={() => {} } />);

    // Assert that it looks like the last snapshot and if not, take a new one (?)
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });

  test('when a user enters a name in a text field the field is updated', () => {
    // Arrange
    // Shallow mounted wrapper
    const wrapper = shallow(<NewCardForm addPetCallback={() => {} } />);
    // Find input field
    let nameField =
      wrapper.find('input[name="text"]');
    // Act - tell name field to trigger onChange event (simulate user typing something in field)
    nameField.simulate('change', {
      target: {
        name: 'text',
        value: 'test test test',
      },
    });
    // Force onChange event
    wrapper.update();
    // DOM gets re-rendered, so we find the component again
    nameField =
      wrapper.find('input[name="text"]');
    // Assert
    // Get props from that specific input field
    expect(nameField.getElement().props.value).toEqual('test test test');
  });

  test('when the user types in a field, the value changes', () => {
    const wrapper = shallow(<NewCardForm  addCardCallback={() => {} } />);

    const fields = [
      {
        field: 'text',
        value: 'test test',
      },
      {
        field: 'emoji',
        value: 'heart_eyes',
      },
    ];

    fields.forEach(({field, value}) => {
      // find the input field
      let nameField = wrapper.find(`[name="${field}"]`);
      // Act
      nameField.simulate('change', {
        target: {
          name: field,
          value,
        },
      });
      // Force the onChange event
      wrapper.update();
      nameField = wrapper.find(`[name="${field}"]`);

      // Assert
      expect(nameField.getElement().props.value).toEqual(value);
    });
  });

  test('NewCardForm can submit', () => {
    // Arrange
    // Shallow mounted the wrapper

    const mockAddCardCallback = jest.fn();

    const wrapper = shallow(<NewCardForm addCardCallback={ mockAddCardCallback }/>);

    wrapper.find(`[name='text']`).simulate('change', {
      target: {
        name: 'text',
        value: 'Be the change',
      },
    });

    // force textfields change
    wrapper.update();

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });

    wrapper.update();

    const nameField = wrapper.find('[name="text"]');

    // Assert
    expect(nameField.getElement().props.value).toEqual('');
    expect(mockAddCardCallback).toHaveBeenCalled();
  });

});
