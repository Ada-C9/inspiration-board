
import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {

  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const cardForm = shallow( <NewCardForm addCardCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(cardForm).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects)
  });

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
    // Check that the second argument was the word 'fish'
    expect(callback.mock.calls[0][1]).toEqual({
      text: '',
      emoji: ''
    });
  })
});
