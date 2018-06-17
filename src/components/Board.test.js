import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

it('renders without crashing', () => {
  const callback = jest.fn();

  const boardComponent = shallow(

    <Board
    url="https://inspiration-board.herokuapp.com/boards/"
    boardName={`kat`}
    changeBoardCallback={callback}
    updateStatusCallback={callback}
    />);

    expect(boardComponent).toMatchSnapshot();

    boardComponent.unmount();
});
