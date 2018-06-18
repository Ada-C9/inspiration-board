import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('shallow mount', () => {
    const card = shallow(
      <Card
        id={1}
        index={1}
        deleteCardCallback={() => {}}
      />
    );

    expect(card).toMatchSnapshot();
  });
});
