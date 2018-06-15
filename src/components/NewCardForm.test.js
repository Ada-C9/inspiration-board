
import React, { Component } from 'react';
import {mount, shallow} from 'enzyme';
import NewCardForm from './NewCardForm'

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<NewCardForm />)

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
