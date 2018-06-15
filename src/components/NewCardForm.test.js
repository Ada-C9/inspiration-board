import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <NewCardForm addCardCallback={() => {} } />);
    expect(wrapper).toMatchSnapshot();
  });

  test('when a user enters text in the text field the field is updated', () => {
    // Arrange
    /// can use shallow b/c there is no subfields in NewCardForm
    const wrapper = shallow( <NewCardForm
      addCardCallback={() => {} } />);

    //find the inputfield
    let nameField = wrapper.find('input[name="name"]');

    // Act
    //simulates the event we are listening for
    nameField.simulate('change', {
      target: {
        text: 'testing out a positive note',
        emoji: '',
      },
    });
    //forces the on change event
    wrapper.update();

    //b/c re-rendered in the DOM have to look for nameField again
    nameField = wrapper.find('input[name="name"]');
    //Assert
    //.props here is only getting the properties on the the inputfield
    expect(nameField.getElement().props.value.toEqual('Bob'))
  });

  test('when the user types on a field the value changes', () => {
    const wrapper = shallow( <NewCardForm
      addCardCallback={() => {} } />);

    //find the inputfield
    let nameField = wrapper.find('input[name="name"]');

    // Act
    //simulates the event we are listening for
    nameField.simulate('change', {
      target: {
        name: 'name',
        value: 'Bob',
      },
    });
    //forces the on change event
    wrapper.update();

    //b/c re-rendered in the DOM have to look for nameField again
    nameField = wrapper.find('input[name="name"]');
    //Assert
    //.props here is only getting the properties on the the inputfield
    expect(nameField.getElement().props.value.toEqual('Bob'))

  })
});
