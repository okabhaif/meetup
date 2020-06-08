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

      <div className="event-details">
        {!this.state.showDetails && <button onClick={this.handleShowDetails} className="showDetails"> Details </button>}

        {showDetails && <div className="show-details">
          <p className="event-description"></p>
          <button onClick={this.handleToggleDetails} className="hideDetails"> Hide Details </button>
        </div>}


      </div>
    );
  }
}

export default Event;