import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe ('Card', () => {
  test('shallow mount', () => {
    const cardComponent = shallow(
      <Card deleteCallback={()=> {} } />
    );

    expect(cardComponent).toMatchSnapshot();
  });
});
