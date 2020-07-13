import React, { Component } from 'react';
import moment from 'moment';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }
  getData = () => {
    const next7Days = []; // Create empty array for the next 7 days
    const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  }

  render() {
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents eventsPerPage={this.state.eventsPerPage} handleNumberInputChanged={(value) => this.updateNumberOfEvents(value)} />
        <ResponsiveContainer
          height={400}>

          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;