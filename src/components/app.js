import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherTable from '../containers/weather-table';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherTable />
      </div>
    );
  }
}
