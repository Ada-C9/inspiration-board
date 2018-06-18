import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<NewCardForm
      addCardCallback={() => {}}
      />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  test('when the user types on a field the value changes', () => {
    const wrapper = shallow(<NewCardForm
      addCardCallback={() => {}}
      />);

    const fieldValues = [
      {
        field: 'text',
        value: 'heart',
      },
      {
        field: 'emoji',
        value: 'heart_eyes',
      }
    ];

    fieldValues.forEach(({field, value}) => {
      let element = wrapper.find(`[name="${field}"]`);

      element.simulate('change', {target: {
        name: field,
        value,
      }})
      wrapper.update();

      element = wrapper.find(`[name="${field}"]`);
      expect(element.getElement().props.value).toEqual(value);
    });

    wrapper.unmount();
  });

  test('NewCardForm can submit', () => {
    const mockAddCardCallback = jest.fn();
    const wrapper = shallow(<NewCardForm
      addCardCallback={mockAddCardCallback}
      />
    );

    wrapper.find('[name="text"]').simulate('change', {
      target: {
        name: 'text',
        value: 'heart',
      }
    });
    wrapper.find('[name="emoji"]').simulate('change', {
      target: {
        name: 'emoji',
        value: 'heart_eyes',
      }
    });
    wrapper.find('form').simulate('submit', {
       preventDefault: () => {},
     });
    wrapper.update();

    const textField = wrapper.find('[name="text"]');
    expect(textField.getElement().props.value).toEqual('');
    const emojiField = wrapper.find('[name="emoji"]');
    expect(emojiField.getElement().props.value).toEqual('');

    expect(mockAddCardCallback).toHaveBeenCalled();
    expect(mockAddCardCallback.mock.calls[0][0]).toEqual({
      text: 'heart',
      emoji: 'heart_eyes',
    });

    wrapper.unmount();
  });
});
