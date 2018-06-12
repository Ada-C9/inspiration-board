import React, { Component } from 'react';
import Board from './Board';
import { mount, shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Board />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
