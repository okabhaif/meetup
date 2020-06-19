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
      events: []
    }
  }
  updateEvents = (lat, lon) => {
    return getEvents(lat, lon).then(events => this.setState({ events }));
  }
  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;