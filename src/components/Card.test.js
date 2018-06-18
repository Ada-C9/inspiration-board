import React from 'react';
import Card from './Card';
import {mount, shallow} from 'enzyme';

test('shallow mount', () => {
  const card = shallow(
    <Card deleteCallBack={()=>{}} />
  );

  expect(card).toMatchSnapshot();

});
