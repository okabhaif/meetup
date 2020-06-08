import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';


describe('<Event /> component', () => {
  let EventWrapper;
  beforeEach(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event-details', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });

  test('render showDetails button', () => {
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
  });

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    });

    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('click on button should hide details', () => {
    EventWrapper.setState({
      showDetails: true
    });
    EventWrapper.find('.hideDetails').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('render show-details', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
  });

  test('render hide-details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    expect(EventWrapper.find('.event-description')).toHaveLength(0);
  });

});