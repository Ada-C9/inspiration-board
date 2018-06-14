import React from 'react';
import Board from './Board';
import {mount, shallow} from 'enzyme';

test('shallow mount', () => {
  const Card = shallow(
    <Card deleteCallBack={()=>{}} />
  );

  expect(Card).toMatchSnapshot();

});
