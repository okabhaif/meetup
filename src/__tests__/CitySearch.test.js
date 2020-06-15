import React from 'react';
import { shallow, mount } from 'enzyme';
import CitySearch from '../CitySearch';

describe('<CitySearch /> component', () => {
  let CitySearchWrapper;
  const cityMockData = [
    {
      city: 'Shrewsbury',
      country: 'us',
      localized_country_name: 'USA',
      state: 'MA',
      name_string: 'Shrewsbury, Massachusetts, USA',
      zip: '01545',
      lat: 42.29,
      lon: -71.72
    },
    {
      city: 'Shrewsbury Township',
      country: 'us',
      localized_country_name: 'USA',
      state: 'NJ',
      name_string: 'Shrewsbury Township, New Jersey, USA',
      zip: '07724',
      lat: 40.3,
      lon: -74.07
    },
    {
      city: 'Shrewsbury',
      country: 'gb',
      localized_country_name: 'United Kingdom',
      name_string: 'Shrewsbury, Shropshire, United Kingdom',
      zip: 'SY1 1DA',
      lat: 52.71,
      lon: -2.75
    },
    {
      city: 'Shrewsbury',
      country: 'us',
      localized_country_name: 'USA',
      state: 'NJ',
      name_string: 'Shrewsbury, New Jersey, USA',
      zip: '07702',
      lat: 40.35,
      lon: -74.06
    },
    {
      city: 'Shrewsbury',
      country: 'us',
      localized_country_name: 'USA',
      state: 'PA',
      name_string: 'Shrewsbury, Pennsylvania, USA',
      zip: '17361',
      lat: 39.76,
      lon: -76.68
    },
    {
      city: 'Shrewsbury',
      country: 'us',
      localized_country_name: 'USA',
      state: 'WV',
      name_string: 'Shrewsbury, West Virginia, USA',
      zip: '25015',
      lat: 38.23,
      lon: -81.53
    },
    {
      city: 'Shrewsbury',
      country: 'us',
      localized_country_name: 'USA',
      state: 'VT',
      name_string: 'Shrewsbury, Vermont, USA',
      zip: '05738',
      lat: 43.53,
      lon: -72.86
    }
  ]

  beforeAll(() => {
    CitySearchWrapper = mount(<CitySearch suggestions={cityMockData} />);
  });

  test('render text input', () => {
    expect(CitySearchWrapper.find('.city-search-container')).toHaveLength(1);
  });

  test('render list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('render list of suggestions correctly', () => {
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i].name_string);
    }
  });

  test('click on suggestion should change query state', () => {
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe('Shrewsbury, Massachusetts, USA');
  });

  test('click on suggestion should change query state', () => {
    CitySearchWrapper.find('.suggestions li').at(1).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe('Shrewsbury Township, New Jersey, USA');
  });

});