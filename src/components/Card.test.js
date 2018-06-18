import React from 'react';
import Card from './Card';
import { mount } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = mount(<Card/>);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
