import React from 'react';
import Card from './Card';
//mount  will mount the component into the virtualDOM
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
