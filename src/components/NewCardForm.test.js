import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {

    const wrapper = shallow( <NewCardForm addCardCallback={() => {} } />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  test('invokes callback on form submission', () => {
     const callback = jest.fn();
     const cardForm = shallow(
       <NewCardForm addCardCallback={callback} />
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

   test('when the user enters a message in the text field, the field is updated', () => {
     const wrapper = shallow( <NewCardForm addCardCallback={() => {}} />);

     let textField = wrapper.find('input[name="text"]');

     textField.simulate('change', {
       target: {
         text: 'This is a test message.',
         emoji: '',
       },
     });

     wrapper.update();
     textField = wrapper.find('input[name="text"]');

     expect(textField.getElement().props.value).toEqual('This is a test message.');
   });
});
