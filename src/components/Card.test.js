
import React, { Component } from 'react';
import {mount, shallow} from 'enzyme';
import Card from './Card'

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Card/>)

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
