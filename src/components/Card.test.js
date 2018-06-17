import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Card removeCard={() => {}} id={1} />);
    expect(wrapper).toMatchSnapshot();
  })
})
