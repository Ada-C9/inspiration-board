import React from 'react';
import ReactDOM from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('That it matches an existing snapshot', () => {
    const card = shallow(
      <Card
      id={1}
      text={'test message'}
      emoji={'test_emoji_code'}
      removeCardCallback={() => {}}
      />
    );

    expect(card).toMatchSnapshot();

    card.unmount();
  });
});
