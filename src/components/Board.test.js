import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('it will match the last snapshot', () => {
    const board = shallow(
      <Board url="" boardName="" updateStatusCallback={()=>{}}/>
    );

    expect(board).toMatchSnapshot();

  });
});
