
import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  const initialNumber = 32;
  const exampleCallback = jest.fn();
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents handleInputChanged={exampleCallback} eventsPerPage={initialNumber} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-container')).toHaveLength(1);
  });
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-text')).toHaveLength(1);
  });
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
  });

  test('check the default number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input').prop('defaultValue')).toBe(32);
  });

  test('handle change in number of events ', () => {
    const eventNumbersObject = { target: { value: 12 } };
    NumberOfEventsWrapper.find('.number-of-events-input').simulate('change', eventNumbersObject);
    expect(exampleCallback.mock.calls[0][0]).toBe(eventNumbersObject.target.value);
  });
});
