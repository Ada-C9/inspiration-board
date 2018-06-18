import React from 'react';
import { mount, shallow } from 'enzyme';
import Board from './Board'

describe('Board', () => {
  test('that is matches an existing snapshot', () => {
    // console.log('in just the regular ol card test durian');
    const wrapper = shallow(<Board />)

    expect(wrapper).toMatchSnapshot();

  });
})
