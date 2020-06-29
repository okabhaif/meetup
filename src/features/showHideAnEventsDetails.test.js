import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';

import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('By default, when user hasn’t searched for a city, show upcoming events based on the user’s location', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user has not entered a location', () => {
    });

    then('the user should a collapsed view of events based on their default location', () => {
      expect(AppWrapper.find('.event-description')).toHaveLength(0);
    });
  });

  test('User can expand event for further information', ({ given, when, then }) => {
    let AppWrapper
    given('user would like more info about a specific event from the list', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on details button', () => {
      AppWrapper.update();
      AppWrapper.find('.showDetails').first().simulate('click');
    });

    then('the user should see an expanded view of the event', () => {
      expect(AppWrapper.find('.event-description')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide extra information', ({ given, when, then }) => {
    const AppWrapper = mount(<App />);

    given('user is on an expanded view of a specific event', () => {
      AppWrapper.update();
      AppWrapper.find('.showDetails').first().simulate('click');
      expect(AppWrapper.find('.event-description')).toHaveLength(1);

    });

    when('the user clicks the hide details button', () => {
      AppWrapper.update();
      AppWrapper.find('.hideDetails').first().simulate('click');

    });

    then('the user should see the collapsed version of the event', () => {
      expect(AppWrapper.find('.event-description')).toHaveLength(0);

    });
  });

});