import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe("NewCardForm", () => {
	test("that it matches an existing snapshot", () => {
		const newCardForm = shallow(
			<NewCardForm createNoteCallback={ ()=>{} } />
		);

		expect(newCardForm).toMatchSnapshot();

		newCardForm.unmount();
	})

	test("keep track of user input", () => {
		const value = 'test value';
		const newCardForm = shallow(
			<NewCardForm createNoteCallback={ ()=>{} } />
		);

		let textInput = newCardForm.find('textarea[name="text"]');

		textInput.simulate('change', {
			target: {
				name: 'text',
				value: 'test value'
			}
		});

		newCardForm.update();

		textInput = newCardForm.find('textarea[name="text"]');

		expect(textInput.getElement().props.value).toBe(value);
	})
})
