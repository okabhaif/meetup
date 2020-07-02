import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
  state = {
    infoText: '',
  }

  handleNumberInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventsPerPage: value });
    if (value && this.props.eventsPerPage.length <= 0) {
      this.setState({
        infoText: 'Number should be higher than 1',
      });
    } else {
      this.setState({
        infoText: '',
      });
      this.props.handleNumberInputChanged(value);
    }
  }

  render() {
    return (
      <div className="number-of-events-container">
        <ErrorAlert text={this.state.infoText} />

        <p className="number-of-events-text">Show <input
          type="number"
          className="number-of-events-input"
          defaultValue={this.props.eventsPerPage}
          onChange={event => this.handleNumberInputChanged(event.target.value)}
        /> events per page </p>

      </div>
    );
  }
}

export default NumberOfEvents;