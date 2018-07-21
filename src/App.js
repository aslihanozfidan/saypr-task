import React, { Component } from 'react';
import './App.css';

import SearchBox from './Components/SearchBox/SearchBox';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        brand: 'Objectives',
        user: 'Skillset',
      },
      titleQuestion: {
        brand: 'What business objectives do you want to accomplish?',
        user: 'What are some of your production skills and techniques?',
      },
    }
  }

  handleSelectProfile = (isTrue) => {
    this.setState({ isUser: isTrue });
  }
  
  onCleanIsUser = () => {
    this.setState({ isUser: '' });
  }

  componentDidMount() {
    this.onCleanIsUser();
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
              <h1>{this.state.isUser ? this.state.title.user : this.state.title.brand}</h1>
              <p>{this.state.isUser ? this.state.titleQuestion.user : this.state.titleQuestion.brand}</p>
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
