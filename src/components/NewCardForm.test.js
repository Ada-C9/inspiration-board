import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from './Card'

describe('NewCardForm', () => {
  test('that is matches an existing snapshot', () => {
    // console.log('innnn new card form grapefruit');
    const wrapper = shallow(<Card />)

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
})
