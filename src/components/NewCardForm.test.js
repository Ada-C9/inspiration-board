import React from 'react';
import NewCardForm from './NewCardForm';
import { mount, shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const newCardForm = mount( <NewCardForm addCardcallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(newCardForm).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    newCardForm.unmount();
  });

  test('Keeps track of user input',() => {
    const cardForm = shallow(
      <NewCardForm addCardcallback={() => {} } />
    );

    let affirmationInput = cardForm.find('input[name="text"]');


    affirmationInput.simulate('change', {
      target: {
        name: 'text',
        value: 'a new affirmation',
      }
    });


    cardForm.update();

    affirmationInput = cardForm.find('input[name="text"]');

    expect(affirmationInput.getElement().props.value).toBe('a new affirmation');
    
  });

  test('Invokes callback on form submission', () => {
    const callback = jest.fn();
    const cardForm = shallow(
      <NewCardForm addCardcallback={callback} />
    );

    cardForm.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(callback).toHaveBeenCalled();

    expect(callback.mock.calls[0][0]).toEqual({
      text: '',
      emoji: '',
    });

  })

});
