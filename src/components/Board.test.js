import React from 'react';
import Board from './Board';
import {shallow} from 'enzyme';

describe('Board', () => {

	test('shallow mount', () => {
		const board = shallow(<Board
			url="something"
			name="me"
			updateStatusCallback={() => {}}
			/>);
		expect(board).toMatchSnapshot();
	});
});
