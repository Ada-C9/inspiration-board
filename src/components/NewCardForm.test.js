import React from 'react';
import NewCardForm from './NewCardForm';
import { mount, shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const cardForm = mount( <NewCardForm addCardCallback={() => {}} />);

    expect(cardForm).toMatchSnapshot();

    cardForm.unmount();
  });

  test('that it invokes callback on form submission', () => {
    const callback = jest.fn();
    const cardForm = shallow(<NewCardForm addCardCallback={callback} />);

    cardForm.find('form').simulate('submit',  {
      preventDefault: () => {}
    });

    expect(callback).toHaveBeenCalled();
    // callback.mock.calls is a list of all the times it was invoked
    // callback.mock.calls[0] is a list of all the arguments passed to the first invocation
    expect(callback.mock.calls[0][0]).toEqual("");
    expect(callback.mock.calls[0][1]).toEqual("");
  });
});
