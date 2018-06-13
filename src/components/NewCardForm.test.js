import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('it will match the last snapshot', () => {
    const newCardForm = shallow(
      <NewCardForm addCardCallback={()=>{}}/>
    );

    expect(newCardForm).toMatchSnapshot();

  });

  test('it invokes a callback when form is submitted', () => {
    const callback = jest.fn();
    const newCardForm = shallow(
      <NewCardForm addCardCallback={callback}/>
    );

    newCardForm.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toEqual({
      text: '',
      emoji: ''
    });

  });
});
