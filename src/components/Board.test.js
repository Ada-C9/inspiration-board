import React from 'react';
import Board from './Board';
import {mount, shallow} from 'enzyme';

describe('Board', () => {
  test('shallow mount', ()=>{
    const Board = shallow(
      <Board updateStatusCallback={()=>{}} />
    );

    expect(Board).toMatchSnapshot();

    Board.unmount();
  });


});
