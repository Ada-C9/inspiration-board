import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('snapshot', () => {
    const wrapper = shallow(<Card
      id = {0}
      text = ''
      emoji = ''
      deleteCardCallback = {()=>{}}
      />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
