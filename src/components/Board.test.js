import React from 'react';
import Board from './Board';
import { mount, shallow } from 'enzyme';

import NewCardForm from './NewCardForm';

describe('Board', () => {
  test('shallow mount', () => {
    const board = shallow(
      <Board updateStatusCallback={()=>{}} />
    );

    expect(board).toMatchSnapshot();

    board.unmount();
  });

  test('render a new card form', () =>{
    const form = shallow(
      <NewCardForm />
    );
    expect(form).toMatchSnapshot();
  });

  test('render a new card form', () =>{
    const form = shallow(
      <NewCardForm addCardCallback={()=>{}} />
    );

    expect(form).toMatchSnapshot();

    form.unmount();
  });

});
