import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('it will match the last snapshot', () => {
    const card = shallow(
      <Card key="" id="" text="" emoji="" deleteCardCallback={()=>{}}/>
    );

    expect(card).toMatchSnapshot();

  });

// Test not working?
  // test('it invokes a callback when the card is deleted', () => {
  //   const callback = jest.fn();
  //   const card = shallow(
  //     <Card deleteCardCallback={callback}/>
  //   );
  //
  //   card.find('.card__delete').simulate('click', {});
  //
  //   expect(callback).toHaveBeenCalled();
  //
  // });
});
