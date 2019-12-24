
import React, { Component } from 'react';
import {mount, shallow} from 'enzyme';
import NewCardForm from './NewCardForm'

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<NewCardForm />)

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  test('When a user enters text in the text field the field is updated', () => {
   // arrange
   // shallow mounted the wrapper

   const wrapper = shallow(<NewCardForm
     addCardCallback={()=>{}} />)

     // find the input field

     let nameField = wrapper.find('input[name="text"]');

     // Act
     nameField.simulate('change', {
       target: {
         name: 'text',
         value: 'Boomer loves you',
       },
     });

     //force the onChange event
     wrapper.update();
     nameField = wrapper.find('input[name="text"]');

     //assert
     expect(nameField.getElement().props.value).toEqual('Boomer loves you');
   });



});
