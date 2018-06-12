import React from 'react';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('snapshot', () => {
    const wrapper = shallow(<NewCardForm addCardCallback = {()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('when a user adds text/emoji to form', () => {
    const wrapper = shallow(<NewCardForm addCardCallback = {()=>{}}/>);
    const inputFields = [
      {
        name: 'text',
        value: 'You can do this!'
      },
      {
        name: 'emoji',
        value: 'smile'
      }
    ]

    inputFields.forEach( (field) => {
      let nameField = wrapper.find(`[name="${field.name}"]`);

      nameField.simulate('change', {
        target: {
          name: field.name,
          value: field.value,
        }
      });

      wrapper.update()
      nameField = wrapper.find(`[name="${field.name}"]`);

      expect(nameField.getElement().props.value)
        .toEqual(field.value);

    });
  });
});
