import React from 'react';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('snapshot', () => {
    const wrapper = shallow(<NewCardForm addCardCallback = {()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
