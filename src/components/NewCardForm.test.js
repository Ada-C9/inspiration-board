import React from 'react';
import NewCardForm from './NewCardForm';
import { mount, shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const cardForm = mount( <NewCardForm addCardCallback={() => {} } />);

    expect(cardForm).toMatchSnapshot();

    cardForm.unmount();
  });

  test('Invokes callback on form submission', () => {
    const callback = jest.fn();
    const cardForm = shallow(
      <NewCardForm addCardCallback={ callback } />
    );

    cardForm.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toEqual({
      text: '',
      emoji: ''
    });
  });

  test('Keeps track of user input', () => {
    const value = "new text value"
    const cardForm = shallow(
      <NewCardForm addCardCallback={() => {} } />
    );

    let textInput = cardForm.find('input[name="text"]');
    textInput.simulate('change', {
      target: {
        name: "text",
        value: value
      }
    });

    cardForm.update();

    textInput = cardForm.find('input[name="text"]');

    expect(textInput.getElement().props.value).toEqual("new text value");
  });
});
