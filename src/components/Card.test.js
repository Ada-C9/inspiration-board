import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('matches previous snapshot', () => {
    const form = shallow(<Card text="hi friend!" id="89" index="78" deleteCardCallback={() => {}}/>);

    expect(form).toMatchSnapshot();
  })
});
