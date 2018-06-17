import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('it can be rendered', () => {
    const wrapper = shallow(<Card/>);

    expect(wrapper).toMatchSnapshot();
  });
});
