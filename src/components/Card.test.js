import React from 'react';
import { mount, shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import Card from './Card';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {

    const wrapper = mount( <Card />);


    expect(wrapper).toMatchSnapshot();


    wrapper.unmount();
  });

  test('That it can render without crashing', () => {

    const testRenderer = TestRenderer.create( <Card

      text="Let an umbrella be your smile."
      emoji="beer"
      />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

});
