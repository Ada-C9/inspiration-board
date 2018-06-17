import React from 'react';
import Board from './Board';
import { mount, shallow } from 'enzyme';

describe('Board', () => {

  test('shallow mount', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
  });

});
