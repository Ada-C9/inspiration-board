import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <NewCardForm addCardCallback={() => {} } />);
    expect(wrapper).toMatchSnapshot();
  });

  test('when a user enters text in the text field the field is updated', () => {

    const wrapper = shallow( <NewCardForm
      addCard={() => {} } />);

    let nameField = wrapper.find('input[name="text"]');

    nameField.simulate('change', {
      target: {
        value: 'testing out a positive note',
        name: 'text',
      },
    });

    wrapper.update();

    nameField = wrapper.find('input[name="text"]');
  
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
