
import React, { Component } from 'react';
import {mount, shallow} from 'enzyme';
import Board from './Board'

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = mount(<Board/>)

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
