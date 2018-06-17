
import React, { Component } from 'react';
import NewCardForm from './NewCardForm';
import { mount, shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<NewCardForm addCardCallback={() => {}}/>);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  test('text field is updated when user enters inspiration text', () => {
    const wrapper = shallow( <NewCardForm addCardCallback={() => {}} />);

    // find the input field
    let textField = wrapper.find('textarea');

    // Act
    textField.simulate('change', {
      target: {
        name: 'text',
        value: 'Go Team',
      },
    });

    // force the onChange event
    wrapper.update();
    textField = wrapper.find('textarea');

    // assert
    expect(textField.getElement().props.value).toEqual('Go Team');
  });


});
