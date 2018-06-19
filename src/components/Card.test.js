import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe("Card", () => {
	test("that it matches an existing snapshot", () => {
		const card = shallow(
			<Card  deleteCardCallback={ ()=>{} }/>
		);

		expect(card).toMatchSnapshot();
		card.unmount();
	})
})
