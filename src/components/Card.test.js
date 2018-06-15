import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';


describe('Card', () => {
  test('matches a snapshot', () => {
    const wrapper = shallow(<Card id={2} deleteCardCallback={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  })
})
