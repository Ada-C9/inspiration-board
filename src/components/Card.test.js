import React from 'react';
import Card from './Card';
import { mount, shallow } from 'enzyme';

describe('Card', () =>{
  test('matches snapshot', () =>{
    const cardComponent = shallow(
      <Card
      text= 'hello world'
      emoji= 'smiley'
      deleteCallback={()=>{}} />
    );
    expect(cardComponent).toMatchSnapshot();
    cardComponent.unmount();
  });
});
