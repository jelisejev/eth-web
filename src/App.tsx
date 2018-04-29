import * as React from 'react';
import './App.css';
import {Web3Provider} from './Web3';
import {Web3Consumer} from './Web3';
import Dashboard from './Dashboard';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Web3Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Dashboard />
        </div>
      </Web3Provider>
    );
  }
}

export default Web3Consumer(App);
