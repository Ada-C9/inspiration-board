import React from 'react';
import Card from './Card';
import {shallow} from 'enzyme';

describe('Card', () => {

	test('shallow mount', () => {
		const card = shallow(<Card
			text="something"
			emoji="something"
			id={4}
			deleteCardCallback={() => {}}
			/>);
		expect(card).toMatchSnapshot();
	});
});
