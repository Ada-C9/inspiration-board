import React from 'react';
import NewCardForm from './NewCardForm';
import { mount, shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = mount( <NewCardForm addCardCallback={() => {} } />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  // test('Keeps track of user input', () => {
  //   const inputValue = 'new message value'
  //   const outputValue = 'new message value'
  //   const wrapper = shallow(
  //     <NewCardForm addCardCallback={()=>{}} />
  //   );
  //
  //   const messageInput = wrapper.find('input[name="card"]');
  //   messageInput.simulate('change', {
  //     target: {
  //         text: 'Hello world',
  //         emoji: 'smiley'
  //     }
  //   });
  //   wrapper.update();
  //   // messageInput = wrapper.find('input[name="text"]');
  //   expect(messageInput.getElement().props.value).toBe(outputValue);
  //   });

      test('Invokes callback on form submission', () => {
        const callback = jest.fn();
        const wrapper = shallow(<NewCardForm addCardCallback={callback} />);

        const form = wrapper.find('form');
        form.simulate('submit', {
          preventDefault: () => {},
        });
        wrapper.update();

        expect(callback).toHaveBeenCalled();
        expect(callback.mock.calls[0][0]).toEqual({
          card: {
            text: '',
            emoji: ''
          }
        });
      });

});
