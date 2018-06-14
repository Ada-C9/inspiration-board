import React from 'react';
import NewCardForm from './Board';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('shallow mount', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const newCardFormComponent = shallow(<NewCardForm
      onSubmitForm={() => {}}
    />);

    // Assert that it looks like the last snapshot
    expect(newCardFormComponent).toMatchSnapshot();
  });
});
