import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {

    const wrapper = shallow(
      <Card
        id={1}
        text={"This is a test message"}
        emoji={"emoji"}
        deleteCardCallback={() => {} }
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
