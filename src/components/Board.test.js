import React from 'react';
import { mount } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = mount(<Board />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
