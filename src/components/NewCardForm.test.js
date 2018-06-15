import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<NewCardForm />);

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
  });
});
