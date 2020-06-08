import React, { Component } from 'react';

class Event extends Component {

  state = {
    event: {},
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
          <p className="event-name">{this.state.event.name}</p>
          <p className="event-location">{this.state.event.localized_location}</p>
          {!this.state.showDetails && <button onClick={this.handleShowDetails} className="showDetails"> Details </button>}
        </div>


        {showDetails && <div className="show-details">

          <p className="event-description">{this.state.event.description}</p>
          <p className="event-link">{this.state.event.link}</p>
          <button onClick={this.handleToggleDetails} className="hideDetails"> Hide Details </button>
        </div>}


      </div>
    );
  }
}

export default Event;