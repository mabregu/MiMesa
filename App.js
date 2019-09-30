import React, {Component} from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import {Scene, Router} from 'react-native-router-flux'
import HomeView from './src/HomeView';
import RestoDetailView from './src/RestoDetailView';

export default class App extends Component {
    render() {
      const isAndroid = Platform.OS === 'android'

      return <Router>
        <Scene key="root">
          <Scene key="home" component={HomeView} title="Home" hideNavBar/>
          <Scene key="restoDetail" component={RestoDetailView} hideNavBar={isAndroid} />
        </Scene>
      </Router>
    }
}
