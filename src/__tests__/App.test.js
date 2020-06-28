import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mock-events';

describe('<App /> component', () => {
  let AppWrapper;
  beforeEach(() => {
    AppWrapper = mount(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});

describe('<App /> integration', () => {
  let AppWrapper;
  beforeEach(() => {
    AppWrapper = mount(<App />);
  });

  test('get list of events after user selects a city', async () => {
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
  });

  test('change state after get list of events', async () => {
    AppWrapper.instance().updateEvents(1.1, 1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });

  test('render correct list of events', () => {
    AppWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
    expect(AppWrapper.find('.suggestions--events')).toHaveLength(4);
  });

  test('render number of events based on user input', async () => {
    AppWrapper.instance().updateNumberOfEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventNumbersObject = { target: { value: 12 } };
    NumberOfEventsWrapper.find('.number-of-events-input').simulate('change', eventNumbersObject);
    expect(AppWrapper.instance().updateNumberOfEvents).toHaveBeenCalledTimes(1);
  });

  test('initial state - number of event suggestions', async () => {
    await AppWrapper.update();
    expect(AppWrapper.find('.suggestions--events')).toHaveLength(4);
  });

  test('interaction - number of events + event list', async () => {
    await AppWrapper.instance().updateNumberOfEvents(2);
    await AppWrapper.update();
    const EventListWrapper = AppWrapper.find(EventList);
    expect(EventListWrapper.find('.suggestions--events')).toHaveLength(2);
  });


});
