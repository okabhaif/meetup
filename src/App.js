import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import debounce from './debounce';

const debouncedGetEvents = debounce(getEvents, 500);

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

  async componentDidMount() {
    await this.updateEvents(null, null)
  }

  updateNumberOfEvents = value => {
    this.setState({ eventsPerPage: value });
    return debouncedGetEvents(this.state.lat, this.state.lon, value).then(events => this.setState({ events }));
  };

  updateEvents = (lat, lon) => {
    this.setState({
      lat,
      lon
    });
    return debouncedGetEvents(lat, lon, this.state.eventsPerPage).then(events => this.setState({ events }));
  };

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents eventsPerPage={this.state.eventsPerPage} handleNumberInputChanged={(value) => this.updateNumberOfEvents(value)} />
        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;