import React from 'react';
import Card from './Card';
import { mount, shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {

    const wrapper = mount (<Card />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();

  });


  test('that it renders App with shallow rendering', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

})
