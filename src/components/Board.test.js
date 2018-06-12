import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('snapshot', () => {
    const wrapper = shallow(<Board url='' boardName=''/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
