import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';

const eventListData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={eventListData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });

});