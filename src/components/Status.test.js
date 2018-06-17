import React from 'react';
import Status from './Status';
import { shallow } from 'enzyme';

describe('Status', () => {
  test('matches snapshot with error type', () => {
    const statusComponent = shallow(
      <Status
      message="test status"
      type="error"
      />
    );

    expect(statusComponent).toMatchSnapshot();

    statusComponent.unmount();
  });

  test('matches snapshot with success type', () => {
    const statusComponent = shallow(
      <Status
      message="test status - success"
      type="success"
      />
    );

    expect(statusComponent).toMatchSnapshot();

    statusComponent.unmount();
  })
})
