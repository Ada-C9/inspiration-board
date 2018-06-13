import React from 'react';
import NewCardForm from './NewCardForm';
import { mount, shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = mount(<NewCardForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('fields update when user enters input', () => {
    const wrapper = shallow(<NewCardForm addCardCallback={() => {}} />);
    let textField = wrapper.find('input[name="text"]');

    
  })
});
