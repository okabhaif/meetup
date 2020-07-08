import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import debounce from './debounce';
import { WarningAlert } from './Alert';


const debouncedGetEvents = debounce(getEvents, 500);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventsPerPage: 32,
      lat: null,
      lon: null,
      warningText: '',

    }
  };

  async componentDidMount() {
    await this.updateEvents(null, null);
    window.addEventListener('online', this.warningOfflineAlert());
  }

  warningOfflineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        warningText: 'WARNING: your internet has disconnected, please reconnect for an up to date list of events in your area!'
      });
    } else {
      this.setState({
        warningText: '',
      });
    }
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
        <WarningAlert text={this.state.warningText} />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents eventsPerPage={this.state.eventsPerPage} handleNumberInputChanged={(value) => this.updateNumberOfEvents(value)} />
        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;