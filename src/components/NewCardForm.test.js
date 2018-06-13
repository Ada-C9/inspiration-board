import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewCardForm from './NewCardForm';
import emoji from 'emoji-dictionary';


describe('NewCardForm', () => {
  test('it will match the last snapshot', () => {
    const newCardForm = shallow(
      <NewCardForm addCardCallback={()=>{}}/>
    );

    expect(newCardForm).toMatchSnapshot();

  });

  test('it invokes a callback when form is submitted', () => {
    const callback = jest.fn();
    const newCardForm = shallow(
      <NewCardForm addCardCallback={callback}/>
    );

    newCardForm.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toEqual({
      text: '',
      emoji: ''
    });

  });

  test('it renders a textarea input', () => {
    const text = shallow(
      <NewCardForm addCardCallback={()=>{}}/>
    );

    expect(text.find('.new-card-form__form-textarea').length).toEqual(1);
  });

  test('it renders a select input', () => {
    const select = shallow(
      <NewCardForm addCardCallback={()=>{}}/>
    );

    expect(select.find('.new-card-form__form-select').length).toEqual(1);
  });

  test('it responds to change event and changes the state of the NewCardForm component text', () => {
    const newCardForm = shallow(
      <NewCardForm addCardCallback={()=>{}}/>
    );

    newCardForm.find('.new-card-form__form-textarea').simulate('change', {target: {name: 'text', value: 'test text'}});

    expect(newCardForm.state('text')).toEqual('test text');
  })

  test('it responds to change event and changes the state of the NewCardForm component emoji', () => {
    const newCardForm = shallow(
      <NewCardForm addCardCallback={()=>{}}/>
    );

    newCardForm.find('.new-card-form__form-select').simulate('change', {target: {name: 'emoji', value: emoji.getUnicode("heart_eyes")}});

    expect(newCardForm.state('emoji')).toEqual(emoji.getUnicode("heart_eyes"));
  })

});
