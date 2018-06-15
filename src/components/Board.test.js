import React from 'react';
import { mount } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('snapshot', () => {
    const wrapper = mount(<Board url='' boardName=''/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
