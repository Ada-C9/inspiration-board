import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
  });
});
