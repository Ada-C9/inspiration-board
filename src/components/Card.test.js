import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';


describe('Card', () => {
  test('matches a snapshot', () => {
    const wrapper = shallow(<Card deleteCard={() => {}} id={2} />);
    expect(wrapper).toMatchSnapshot();
  })
})
