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
      addCard={() => {} } />);

    //find the inputfield
    let nameField = wrapper.find('input[name="text"]');

    // Act
    //simulates the event we are listening for
    nameField.simulate('change', {
      target: {
        value: 'testing out a positive note',
        name: 'text',
      },
    });
    //forces the on change event
    wrapper.update();

    //b/c re-rendered in the DOM have to look for nameField again
    nameField = wrapper.find('input[name="text"]');
    //Assert
    //.props here is only getting the properties on the the inputfield
    expect(nameField.getElement().props.value).toEqual('testing out a positive note');
  });

  test('when a user enters text in the emoji field the field is updated', () => {

    const wrapper = shallow( <NewCardForm
      addCard={() => {} } />);

    let nameField = wrapper.find('input[name="emoji"]');

    nameField.simulate('change', {
      target: {
        value: 'heart_eyes',
        name: 'emoji',
      },
    });

    wrapper.update();

    nameField = wrapper.find('input[name="emoji"]');

    expect(nameField.getElement().props.value).toEqual('heart_eyes');
  });

});
