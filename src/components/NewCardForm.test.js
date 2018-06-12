import React from 'react';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';



describe('NewCardForm', () => {
  // beforeAll(()=>{
  //   const inputFields = [
  //     {
  //       name: 'text',
  //       value: 'You can do this!'
  //     },
  //     {
  //       name: 'emoji',
  //       value: 'smile'
  //     }
  //   ]
  // });

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

  test('NewCardForm can submit', () => {
    const mockAddCardCallback = jest.fn();
    const wrapper = shallow(<NewCardForm
      addCardCallback = { mockAddCardCallback }
      />);

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
      wrapper.find(`[name="${field.name}"]`).simulate('change', {
        target: {
          name: field.name,
          value: field.value
        }
      });
    });

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    wrapper.update();

    inputFields.forEach( (field) => {
      const nameField = wrapper.find(`[name="${field.name}"]`);
      expect(nameField.getElement().props.value).toEqual('');
    });

    expect(mockAddCardCallback).toHaveBeenCalled();
    expect(mockAddCardCallback.mock.calls[0][0]).toEqual({
      text: 'You can do this!',
      emoji: 'smile'
    });
  });
});
