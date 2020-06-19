import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
const exampleEvent = {
  created: 1591604579000,
  duration: 7200000,
  id: '271158441',
  name: 'Rust Remote #3',
  date_in_series_pattern: false,
  status: 'upcoming',
  time: 1598378400000,
  local_date: '2020-08-25',
  local_time: '20:00',
  updated: 1592460378000,
  utc_offset: 7200000,
  waitlist_count: 0,
  yes_rsvp_count: 19,
  venue: {
    id: 26906060,
    name: 'Online event',
    repinned: false,
    country: '',
    localized_country_name: '',
  },
  is_online_event: true,
  group: {
    created: 1431526364000,
    name: 'Rust Munich',
    id: 18594917,
    join_mode: 'open',
    lat: 48.13999938964844,
    lon: 11.579999923706055,
    urlname: 'rust-munich',
    who: 'Members',
    localized_location: 'München, Germany',
    state: '',
    country: 'de',
    region: 'en_US',
    timezone: 'Europe/Berlin',
  },
  link: 'https://www.meetup.com/rust-munich/events/271158441/',
  description: 'Third round of a purely online/remote meetup ',
  how_to_find_us: 'https://youtu.be/on4Tb0Ssdro',
  visibility: 'public',
  member_pay_fee: false,
};

describe('<Event /> component', () => {
  let EventWrapper;

  beforeEach(() => {
    EventWrapper = shallow(<Event event={exampleEvent} />);
  });

  test('render event-details', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
    expect(EventWrapper.find('.event-date')).toHaveLength(1);
    expect(EventWrapper.find('.event-time')).toHaveLength(1);
    expect(EventWrapper.find('.event-attendees')).toHaveLength(1);
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
    expect(EventWrapper.find('.event-location')).toHaveLength(1);
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
    expect(EventWrapper.find('.event-name').first().text()).toEqual('Rust Remote #3');
  });

  test('render description when showDetails===true', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event-description').first().text()).toEqual('Third round of a purely online/remote meetup ');
  });

});