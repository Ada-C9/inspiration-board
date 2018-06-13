import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';


describe('Card', () => {

  test('shallow mount', () => {
    const card = shallow(
      <Card deleteCallback={()=>{}} />
    );

    expect(card).toMatchSnapshot();


  });
});
