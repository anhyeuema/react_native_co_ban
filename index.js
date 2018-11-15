/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => listView);

import React, {Component} from 'react';
import { Text, View, ListView } from 'react-native';
import App from './Components/App.js';

export default class listView extends Component {
  render() {
    return (
      <App />
    );
  }
}
