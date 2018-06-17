import React from 'react';
import Card from './Card';
import { mount, shallow } from 'enzyme';

describe('Card', () => {
  test('shallow mount', () => {
    const card = shallow(
      <Card deleteCardCallback={() => {}} />
    );

    expect(card).toMatchSnapshot();
  });

});
