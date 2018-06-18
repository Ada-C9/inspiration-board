import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

test('shallow mount', () => {
  const card = shallow(
    <Card id='0' key='0' text='ok' emoji='beer' deleteThisCard={() => {}} />
  );

  expect(card).toMatchSnapshot();
  card.unmount();
});
