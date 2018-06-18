import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('matches previous snapshot', () => {
    const form = shallow(<NewCardForm addCardCallback={() => {}}/>);

    expect(form).toMatchSnapshot();
  })

  test('Invokes callback on form submission', () => {
    const callback = jest.fn();
    const cardForm = shallow(
      <NewCardForm addCardCallback={callback} />
    );

    cardForm.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(callback).toHaveBeenCalled();


    // callback.mock.calls is a list of all the times it was invoked
    // callback.mock.calls[0] is a list of all the arguments passed to the first invocation
    expect(callback.mock.calls[0][0]).toEqual({
      text: '',
      emoji: ''
    });
  });

});
