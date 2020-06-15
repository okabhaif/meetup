import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';


describe('<Event /> component', () => {
  let EventWrapper;
  const event = {
    created: 1579604949000,
    duration: 108000000,
    id: 268082423,
    name: 'Cadair idris & mawwdach cycle weekend away',
    local_date: '2020-06-27',
    local_time: '11:00',
    yes_rsvp_count: 63,
    group: {
      id: 23394218,
      join_mode: 'approval',
      lat: 52.709999084472656,
      lon: -2.75,
      urlname: 'meetup-group-wKtrSzWw',
      who: 'Members',
      localized_location: 'Shrewsbury, United Kingdom'
    },
    link: 'https://www.meetup.com/meetup-group-wKtrSzWw/events/268082423/',
    description: 'Join us for a weekrmd away near Barmouth . Saturday cadair idris Walk , Saturday night dinner and Sunday mawddach trail cycle ride .Accommodation is up to you . Some of us are staying in dollengau others Barmouth',
    visibility: 'public',
    member_pay_fee: false
  }

  beforeEach(() => {
    EventWrapper = shallow(<Event event={event} />);
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

    expect(EventWrapper.find('.event-name').first().text()).toEqual('Cadair idris & mawwdach cycle weekend away');
  });

  test('render description when showDetails===true', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event-description').first().text()).toEqual('Join us for a weekrmd away near Barmouth . Saturday cadair idris Walk , Saturday night dinner and Sunday mawddach trail cycle ride .Accommodation is up to you . Some of us are staying in dollengau others Barmouth');
  });

});