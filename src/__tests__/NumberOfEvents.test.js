import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const number = NumberOfEventsWrapper.state('number');
    expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(number);
  });

  test('default number of events === 32', () => {
    expect(NumberOfEventsWrapper.state('number')).toBe(32);
  });

  test('change state when text input changes', () => {
    const eventNumbersObject = { target: { value: '12' } };
    NumberOfEventsWrapper.find('.number-of-events').simulate('change', eventNumbersObject);
    expect(NumberOfEventsWrapper.state('number')).toBe('12');
  });

});
