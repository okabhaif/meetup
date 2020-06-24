import React, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="number-of-events-container">
        <p className="number-of-events-text">Show <input
          type="text"
          className="number-of-events-input"
          defaultValue={this.props.eventsPerPage}
          onChange={event => this.props.handleInputChanged(event.target.value)}
        /> events per page </p>

      </div>
    );
  }
}

export default NumberOfEvents;