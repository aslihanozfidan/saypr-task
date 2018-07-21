import React, { Component } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox';
import { contentConst } from './Constants/contentData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'buyer',
    }
  }

  onThemeChange = (theme) => {
    this.setState({ theme: this.state.theme === 'creator' ? 'buyer' : 'creator'});
  }

  render() {
    const { theme } = this.state;
    return (
      <div className="app">
        <header>
          <div onClick={this.onThemeChange}>Toggle Theme</div>
        </header>
        <div className="content">
          {this.state.theme === 'creator' ?
            <div className="content-title">
              <h1>
                <span className="line-blue">
                  {contentConst.title.creator}
                </span>
              </h1>
              <p>{contentConst.titleQuestion.creator}</p>
            </div>
            :
            <div className="content-title">
              <h1>
                <span className="line-yellow">
                  {contentConst.title.buyer}
                </span>
              </h1>
              <p>{contentConst.titleQuestion.buyer}</p>
            </div>

          }

          <div className="search-area">
            <SearchBox profileType={theme} theme={theme}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
