import React, {Component} from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux'
import HomeView from './src/screens/HomeView';
import LoginView from './src/screens/LoginView';
import RestoDetailView from './src/RestoDetailView';
import { Ionicons } from '@expo/vector-icons';
import { firebaseAuth } from './src/services/firebase'

export default class App extends Component {

    signOutUser = async () => {
        try {
            await firebaseAuth.signOut();
            Actions.login()
        } catch (e) {
            console.log(e);
        }
    }

    render() {
      return <Router>
        <Scene key="root">
          <Scene key="login" component={LoginView} title="Login" hideNavBar/>
          <Scene
            key="home"
            component={HomeView}
            title='Lista de Restaurantes'
            hideNavBar={false}
            type={'reset'}
            renderRightButton={() => <Ionicons onPress={() => this.signOutUser()} name="md-log-out" size={32} color="gray" />}
          />
          <Scene
            key="restoDetail"
            component={RestoDetailView}
            title='Comentarios'
            hideNavBar={false}
            renderRightButton={() => <Ionicons onPress={() => this.signOutUser()} name="md-log-out" size={32} color="gray" />}
          />
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
