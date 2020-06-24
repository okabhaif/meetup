import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {

  render() {
    return (
      <ul className="suggestions">
        {this.props.events.map(event =>
          <li className="suggestions--events" key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;