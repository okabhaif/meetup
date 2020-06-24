import React, { Component } from 'react';

class Event extends Component {

  state = {
    showDetails: false
  }

  handleShowDetails = () => {

    this.setState({ showDetails: true });
  }

  handleToggleDetails = () => {

    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    let showDetails = this.state.showDetails;

    return (
      <div className="event-container">
        <div className="event-details">
          <p className="event-date">{this.props.event.local_date}</p>
          <p className="event-time">{this.props.event.local_time}</p>
          <p className="event-attendees">Group : {this.props.event.yes_rsvp_count} people confirmed. </p>
          <p className="event-name">{this.props.event.name}</p>
          <p className="event-location">{this.props.event.localized_location}</p>
          {!this.state.showDetails && <button onClick={this.handleShowDetails} className="showDetails"> Details </button>}
        </div>


        {showDetails && <div className="show-details">

          <p className="event-description">{this.props.event.description}</p>
          <p className="event-link">{this.props.event.link}</p>
          <button onClick={this.handleToggleDetails} className="hideDetails"> Hide Details </button>
        </div>}


      </div>
    );
  }
}

export default Event;