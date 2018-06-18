import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('That it matches an existing snapshot', () => {
    const cardForm = shallow(
      <NewCardForm addCardCallback={() => {} } />
    );

    expect(cardForm).toMatchSnapshot();

    cardForm.unmount();
  });
});
