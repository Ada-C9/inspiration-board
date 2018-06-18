
import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
  
    const callback = jest.fn();
    const card = shallow(
      <Card
      id= '100'
      text="test text"
      emoji="grinning"
      deleteCardCallback={callback}
       />
    )

    expect(card).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
  });
});
