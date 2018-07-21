import React, { Component } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox';
import Header from './Components/Header/Header';
import { contentConst } from './Constants/contentData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: ''
    }
  }

  handleSelectProfile = (isTrue) => {
    this.setState({ isUser: isTrue });
  }

  onCleanIsUser = () => {
    this.setState({ isUser: '' });
  }

  render() {
    return (
      <div className="App">
        {this.state.isUser === '' ? (
          <div className="SelectProfile">
            <ul>
              <li onClick={() => this.handleSelectProfile(false)}>Brand Profile</li>
              <li onClick={() => this.handleSelectProfile(true)}>User Profile</li>
            </ul>
          </div>
        ) : (
            <div className="content">
              {this.state.isUser ?
                <Header profileType={'user'} isUser={this.state.isUser} cleanIsUser={this.onCleanIsUser} /> :
                <Header profileType={'brand'} isUser={this.state.isUser} cleanIsUser={this.onCleanIsUser} />}
              {this.state.isUser ?
                <div className="content-title">
                  <h1>
                    <span className="line-blue">
                      {contentConst.title.user}
                    </span>
                  </h1>
                  <p>{contentConst.titleQuestion.user}</p>
                </div>
                :
                <div className="content-title">
                  <h1>
                    <span className="line-yellow">
                      {contentConst.title.brand}
                    </span>
                  </h1>
                  <p>{contentConst.titleQuestion.brand}</p>
                </div>
              }
              <div className="search-area">
                {this.state.isUser ? <SearchBox profileType={'user'} /> : <SearchBox profileType={'brand'} />}
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default App;
