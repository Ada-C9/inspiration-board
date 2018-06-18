import React from 'react';
import BoardSelection from './BoardSelection';
import {shallow} from 'enzyme';

describe('BoardSelection', () => {

	test('shallow mount', () => {
		const boardSelection = shallow(<BoardSelection
			url="something"
			updateBoardCallback={() => {}}
			/>);
		expect(boardSelection).toMatchSnapshot();
	});
});
