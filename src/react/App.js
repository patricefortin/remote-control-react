import React, { Component } from 'react';

import './App.css';

import Powerbar from './devices/Powerbar';
import Disco from './devices/Disco';
import Navbar from './components/Navbar';
import { DEVICES } from './enums';

class App extends Component {
  state = {
    currentDevice: DEVICES.POWERBAR,
    //currentDevice: DEVICES.DISCO,
  }

  onTargetButtonClick = (baseUrl, target, value) => {
    this.props.remoter.callTarget(baseUrl, target, value);
  }

  onNavbarItemClick = (device) => {
    this.setState({ currentDevice: device });
  }

  renderDeviceDisco = () => (
    <Disco 
      onClick={this.onTargetButtonClick}
    />
  );

  renderDevicePowerbar = () => (
    <Powerbar 
      onClick={this.onTargetButtonClick}
    />
  );

  render() {
    return (
      <div className="App">
        <Navbar onClick={this.onNavbarItemClick} />
        {this.state.currentDevice === DEVICES.POWERBAR && this.renderDevicePowerbar()}
        {this.state.currentDevice === DEVICES.DISCO && this.renderDeviceDisco()}
      </div>
    );
  }
}

export default App;
