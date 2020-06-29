import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When the user hasn\'t specified a number, 32 events are displayed by default', ({ given, when, then }) => {
    let AppWrapper;

    given('user opens the app', () => {
      AppWrapper = mount(<App />);

    });

    when('user has not specified a number of events to be displayed', () => {

    });

    then('user should see a default of thirty two events', () => {
      expect(AppWrapper.state('eventsPerPage')).toEqual(32);
      expect(AppWrapper.find('.number-of-events-input').prop('defaultValue')).toBe(32);


    });
  });

  test('User can change how many events they want to be displayed', ({ given, when, then }) => {
    let AppWrapper;
    given('user opens the app', () => {
      AppWrapper = mount(<App />);

    });

    when('user specifies a number of events to be displayed', () => {
      AppWrapper.update();
      const eventNumbersObject = { target: { value: 12 } };
      AppWrapper.find('.number-of-events-input').simulate('change', eventNumbersObject);
    });

    then('user should see that number of events', () => {
      expect(AppWrapper.state('eventsPerPage')).toEqual(12);
      expect(AppWrapper.find('.number-of-events-input').prop('defaultValue')).toBe(12);
    });
  });



});