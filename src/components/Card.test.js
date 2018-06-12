import React from 'react';
import Card from './Card';
import { mount, shallow } from 'enzyme';

describe('Card', () => {
  test('shallow mount', () => {
    const card = mount(
      <Card text="test text" emoji="grinning" />
    );

    expect(card).toMatchSnapshot();

    card.unmount();
  });
});
