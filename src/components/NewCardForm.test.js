// src/NewCardForm.test.js
import React from 'react';
import NewCardForm from './NewCardForm';
import {shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {

    const newCardForm = shallow( <NewCardForm addCardCallback={() => {} } />);


    expect(newCardForm).toMatchSnapshot();

    newCardForm.unmount();
  });
});
