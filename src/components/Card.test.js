import React from 'react';
import Card from './Card';
import { mount, shallow } from 'enzyme';

describe('Card', () => {
  test('onClick handler working', () => {
    // const textValue =  'Encouraging message';
    const onClick = jest.fn();
    const wrapper = shallow(
      <button type="submit" onClick={onClick}></button>
    );

    expect(wrapper).toMatchSnapshot();

      wrapper.find('button').simulate('click');
  })
})
