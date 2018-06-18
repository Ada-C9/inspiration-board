import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('shallow mount', () => {
    const cardForm = shallow( <NewCardForm addCardCallback={() => {}} />);

    expect(cardForm).toMatchSnapshot();
  });
});
