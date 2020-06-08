import React, { Component } from 'react';

class Event extends Component {

  state = {
    event:
    {
      local_time: '19:00',
      link: 'https://www.meetup.com/Lichfield-Ladies-over-40s-Book-Club-with-wine-and-friends/events/269039500/',
      name: 'Lichfield Ladies over 40s Book Club with wine and friends',
      id: '32534983',
      join_mode: 'approval',
      urlname: 'Lichfield-Ladies-over-40s-Book-Club-with-wine-and-friends',
      who: 'Members',
      localized_location: 'Lichfield, United Kingdom',
      country: 'gb',
      timezone: 'Europe/London',
      waitlist_count: 0,
      yes_rsvp_count: 7,
      description: '1984 by George Orwell'
    }
    ,
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