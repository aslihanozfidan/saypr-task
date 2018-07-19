import React, { Component } from 'react';
import './App.css';

import SearchBox from './Components/SearchBox/SearchBox';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="content">
          <h1>Objectives</h1>
          <p>What business objectives do you want to accomplish?</p>
          <div className="search-area">
            <SearchBox />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
