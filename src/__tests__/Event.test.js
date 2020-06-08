import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';


describe('<Event /> component', () => {
  let EventWrapper;
  beforeEach(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event-details', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });

  test('render showDetails button', () => {
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
  });

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    });

    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });



  test('click on button should hide details', () => {
    EventWrapper.setState({
      showDetails: true
    });
    EventWrapper.find('.hideDetails').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('render show-details', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
  });

  test('render hide-details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    expect(EventWrapper.find('.event-description')).toHaveLength(0);
  });

  test('render event title', () => {
    EventWrapper.setState({
      event: {
        local_time: '19:00',
        link: 'https://www.meetup.com/Lichfield-Ladies-over-40s-Book-Club-with-wine-and-friends/events/269039500/',
        name: 'Lichfield Ladies over 40s Book Club with wine and friends',
        id: '32534983',
        join_mode: 'approval',
        urlname: 'Lichfield-Ladies-over-40s-Book-Club-with-wine-and-friends',
        who: 'Members',
        localized_location: 'Lichfield, United Kingdom',
        country: 'gb',
        timezone: 'Europe/London',
        waitlist_count: 0,
        yes_rsvp_count: 7,
        description: '1984 by George Orwell'
      }
    });
    expect(EventWrapper.find('.event-name').first().text()).toEqual('Lichfield Ladies over 40s Book Club with wine and friends');
  });

  test('render description when showDetails===true', () => {
    EventWrapper.setState({
      event: {
        local_time: '19:00',
        link: 'https://www.meetup.com/Lichfield-Ladies-over-40s-Book-Club-with-wine-and-friends/events/269039500/',
        name: 'Lichfield Ladies over 40s Book Club with wine and friends',
        id: '32534983',
        join_mode: 'approval',
        urlname: 'Lichfield-Ladies-over-40s-Book-Club-with-wine-and-friends',
        who: 'Members',
        localized_location: 'Lichfield, United Kingdom',
        country: 'gb',
        timezone: 'Europe/London',
        waitlist_count: 0,
        yes_rsvp_count: 7,
        description: '1984 by George Orwell'
      },
      showDetails: true
    });
    expect(EventWrapper.find('.event-description').first().text()).toEqual('1984 by George Orwell');
  });

});