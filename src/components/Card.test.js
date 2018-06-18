import React from 'react';
import Card from './Card';
import { mount , shallow} from 'enzyme';


describe('Card', () => {
  test('that it matches an existing snapshot', () => {

    const wrapper = mount( <Card
          text = {"hey, friend"}
          emoji = {"heart_eyes"}
          deleteCard ={() => {} }
          id={1}
        />)

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });

  test('shallow mount', ()=> {
    const aCard = shallow(
          <Card
          text = {"hey, friend"}
          emoji = {"heart_eyes"}
          deleteCard ={() => {} }
          id={1}
          />
    );
    expect(aCard).toMatchSnapshot();
  })

});
