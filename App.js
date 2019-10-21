import React, {Component} from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import {Scene, Router} from 'react-native-router-flux'
import HomeView from './src/screens/HomeView';
import LoginView from './src/screens/LoginView';
import RestoDetailView from './src/RestoDetailView';

export default class App extends Component {
    render() {
      return <Router>
        <Scene key="root">
          <Scene key="login" component={LoginView} title="Login" hideNavBar/>
          <Scene key="home" component={HomeView} title='Lista de Restaurantes' hideNavBar={false} />
          <Scene key="restoDetail" component={RestoDetailView} title='Comentarios' hideNavBar={false} />
        </Scene>
      </Router>
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
