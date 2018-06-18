import React from 'react';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<NewCardForm addNewCardCallback={() => {} }/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  })

  test('when a user enters a name in a field, the field is updated', () => {
    const wrapper = shallow(<NewCardForm addNewCardCallback={() => {} }/>);

    const fieldValues = [
      {
        field: 'text',
        value: 'Hi, mom'
      },
      {
        field: 'emoji',
        value: 't-rex'
      }
    ];

    fieldValues.forEach(({field, value}) => {
      let element = wrapper.find(`[name="${field}"]`)
      element.simulate('change', {target: {
        name: field,
        value,
      }});
      wrapper.update()
      element = wrapper.find(`[name="${field}"]`);
      expect(element.getElement().props.value).toEqual(value);
    });
  });

  test('NewCardForm can submit; fields clear', () => {
    const mockAddNewCardCallback = jest.fn();
    const wrapper = shallow(<NewCardForm addNewCardCallback={mockAddNewCardCallback}/>);

    wrapper.find(`[name="text"]`).simulate('change', {
      target: {
        name: 'text',
        value: 'Hi, Mom'
      },
    });
    wrapper.update();

    wrapper.find(`[name="emoji"]`).simulate('change', {
      target: {
        name: 'emoji',
        value: 't-rex'
      },
    });
    wrapper.update();

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });

    wrapper.update();

    const textField = wrapper.find(`[name="text"]`);
    expect(textField.getElement().props.value).toEqual('');

    const emojiField = wrapper.find(`[name="emoji"]`);
    expect(emojiField.getElement().props.value).toEqual('');

    expect(mockAddNewCardCallback).toHaveBeenCalled();
    expect(mockAddNewCardCallback.mock.calls[0][0]).toEqual({
      text: 'Hi, Mom',
      emoji: 't-rex',
    })
  })
})
