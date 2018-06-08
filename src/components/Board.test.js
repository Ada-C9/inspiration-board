import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('can be rendered', () => {
    const wrapper = shallow(<Board boardId={1} />);

    expect(wrapper).toMatchSnapshot();
  });
});
