import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('it will match the last snapshot', () => {
    const card = shallow(
      <Card id={0} text="" emoji="" deleteCardCallback={()=>{}}/>
    );

    expect(card).toMatchSnapshot();

  });

  test('it invokes a callback when the card is deleted', () => {
    const callback = jest.fn();
    const card = shallow(
      <Card id={0} text="" emoji="" deleteCardCallback={callback}/>
    );

    card.find('button').simulate('click');
    global.confirm = () => true //This stubs the window.confirm function

    expect(callback).toHaveBeenCalled();

  });
});
