import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  test('that is matches an existing snapshot', () => {
    // console.log('in just the regular ol card test durian');
    const wrapper = shallow(<Card />)

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
})
