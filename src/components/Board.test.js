import React from 'react';
import Board from './Board';
import { mount , shallow} from 'enzyme';


describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange

    const wrapper = mount(   <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`Ada-Lovelace`}
        />)

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });

  test('shallow mount', ()=> {
    const cards = shallow(
      <Board
         url="https://inspiration-board.herokuapp.com/boards/"
         boardName={`Ada-Lovelace`}
         />
    );
    expect(cards).toMatchSnapshot();
  })

});
