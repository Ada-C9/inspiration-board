import React from 'react';
import { mount, shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('it matches an existing snapshot', () => {
    const cardForm = shallow (
      <NewCardForm/>
    );
    expect(cardForm).toMatchSnapshot();
    cardForm.unmount();
  });
});
