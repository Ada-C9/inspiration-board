import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('matches previous snapshot', () => {
    const form = shallow(<NewCardForm addCardCallback={() => {}}/>);

    expect(form).toMatchSnapshot();
  })
});
