import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('that it renders Card with shallow rendering', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

});
