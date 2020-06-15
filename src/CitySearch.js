import React, { Component } from 'react';
// import Autocomplete from 'react-autocomplete';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [
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
  }


  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  }

  handleItemClicked = (value) => {
    this.setState({ query: value });
  }

  render() {
    return (
      <div className="city-search-container">
        {/* <Autocomplete
          inputProps={{ id: "city-search-input" }}
          getItemValue={suggestion => suggestion.name_string}
          items={this.state.suggestions.map(suggestions => suggestions)}

          renderItem={(suggestions, isHighlighted) =>
            <div className="suggestions" key={suggestions.name_string} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {suggestions.name_string}
            </div>
          }
          value={this.state.query}
          onChange={(e) => this.handleInputChanged(e)}
          onSelect={(value) => this.handleItemClicked(value)}
          placeholder="search for your city here"
        /> */}
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder="search for your city here"
        />

        <ul className="suggestions">
          {this.state.suggestions.map(item =>
            <li key={item.name_string}
              onClick={() => this.handleItemClicked(item.name_string)}>
              {item.name_string}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch;