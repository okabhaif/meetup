import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventsPerPage: 32,
      lat: null,
      lon: null
    }
  };

  updateNumberOfEvents = value => {
    this.setState({ eventsPerPage: value });
    return getEvents(this.state.lat, this.state.lon, value).then(events => this.setState({ events }));
  };

  updateEvents = (lat, lon) => {
    this.setState({
      lat,
      lon
    });
    return getEvents(lat, lon, this.state.eventsPerPage).then(events => this.setState({ events }));
  };

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents eventsPerPage={this.state.eventsPerPage} handleInputChanged={(event) => this.updateNumberOfEvents(event)} />
      </div>
    );
  }
}

export default App;