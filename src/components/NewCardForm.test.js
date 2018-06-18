import React from 'react';
import NewCardForm from './NewCardForm';
import {shallow} from 'enzyme';

describe('NewCardForm', () => {

	test('shallow mount', () => {
		const newForm = shallow(<NewCardForm
			addCardCallback={() => {}}
			/>);
		expect(newForm).toMatchSnapshot();
	});
});
