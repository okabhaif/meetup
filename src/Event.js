import React, { Component } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line, Tooltip } from 'recharts';

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

  getData = () => {
    const freeSpaces = this.props.event.rsvp_limit - this.props.event.yes_rsvp_count
    const reserved = this.props.event.yes_rsvp_count

    return (
      [
        { "name": "Free Spaces", "value": freeSpaces },
        { "name": "Reserved Spaces", "value": reserved }
      ]
    )
  }


  render() {
    let showDetails = this.state.showDetails;


    const colours = ['#8884d8', '#82ca9d'];

    return (
      <div className="event-container">
        <div className="event-details">
          <p className="event-name">{this.props.event.name}</p>
          <p className="event-date"><b>Date of Event:</b>&nbsp;{this.props.event.local_date}</p>
          <p className="event-time"><b>Time of Event:&nbsp;</b>{this.props.event.local_time}</p>
          <p className="event-location"><b>Location of Event:&nbsp;</b>{this.props.event.group.localized_location}</p>



          {!this.props.event.rsvp_limit && <p className="event-attendees"><b>Group:&nbsp;</b>{this.props.event.yes_rsvp_count} people confirmed. </p>}
          {this.props.event.rsvp_limit &&
            <ResponsiveContainer height={260}>
              <PieChart >
                <Pie data={this.getData()} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
                  {this.getData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colours[index]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend verticalAlign="bottom" height={36}>

                  <Line name="Free Spaces" type="monotone" dataKey="freeSpaces" stroke="#8884d8" />
                  <Line name="Reserved Spaces" type="monotone" dataKey="reserved" stroke="#82ca9d" />

                </Legend>


              </PieChart>

            </ResponsiveContainer>
          }

          {!this.state.showDetails && <button onClick={this.handleShowDetails} className="showDetails"> Details </button>}
        </div>


        {
          showDetails && <div className="show-details">

            <p className="event-description" dangerouslySetInnerHTML={{__html:this.props.event.description}}></p>
            <p className="event-link">{this.props.event.link}</p>
            <button onClick={this.handleToggleDetails} className="hideDetails"> Hide Details </button>
          </div>
        }


      </div >
    );
  }
}

export default Event;

