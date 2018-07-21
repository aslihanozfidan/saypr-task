import React, { Component } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox';
import { contentConst } from './Constants/contentData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBuyerTheme: true,
    }
  }

  handleClick = () => {
    this.setState({
      isBuyerTheme: !this.state.isBuyerTheme,
    });
  }



  render() {
    return (
      <div className="App">
        <header>
          <div onClick={this.handleClick}>Toggle Theme</div>
        </header>
        <div className="content">
          {this.state.isBuyerTheme ?
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
            {this.state.isBuyerTheme ?
              <SearchBox profileType={'creator'} isChange={this.state.isBuyerTheme} /> :
              <SearchBox profileType={'buyer'} isChange={this.state.isBuyerTheme} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
