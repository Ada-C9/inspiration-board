import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {

  test('that it renders NewCardForm with shallow rendering', () => {
    const wrapper = shallow(<NewCardForm submitNewCard={ ()=>{ } } />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

});
