import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';


class App extends Component {
  state = {
    events: [
      {
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
      },
      {
        id: 268037494,
        name: 'Shrewsbury flower show',
        local_date: '2020-09-05',
        local_time: '11:00',
        yes_rsvp_count: 4,
        venue: {
          id: 11288172,
          name: 'QUARRY PARK',
          address_1: 'SHREWSBURY',
          city: 'SHROPSHIRE',
          country: 'gb',
          localized_country_name: 'United Kingdom'
        },
        group: {
          id: 23394218,
          join_mode: 'approval',
          lat: 52.709999084472656,
          lon: -2.75,
          urlname: 'meetup-group-wKtrSzWw',
          who: 'Members',
          localized_location: 'Shrewsbury, United Kingdom',
        },
        link: 'https://www.meetup.com/meetup-group-wKtrSzWw/events/268037494/',
        description: 'https://shrewsburyflowershow.org.uk/tickets/ Shrewsbury’s awesome flower show , all day event with exhibits stalls music food fireworks and more . Click on link for details early bird ticket is £25',
        visibility: 'public',
        member_pay_fee: false
      }
    ],
    number: 32
  }

  handleNumberOfEvents = (value) => {
    this.setState({ number: value });

  }

  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList events={(this.state.events.slice(0, this.state.number))} />
        <NumberOfEvents number={this.state.number} handleNumberOfEvents={(value) => this.handleNumberOfEvents(value)} />
      </div>
    );
  }
}

export default App;