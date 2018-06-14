import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  test('that is matches an existing snapshot', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
})
