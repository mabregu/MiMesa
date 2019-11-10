import React, {Component} from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux'
import HomeView from './src/screens/HomeView';
import LoginView from './src/screens/LoginView';
import RestoDetailView from './src/RestoDetailView';
import ReserveView from './src/ReserveView';
import MercadoPagoView from './src/MercadoPagoView';
import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
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
            key="categoria"
            component={CategoriesScreen}
            title='Categorias'
            hideNavBar={false}
            type={'reset'}
            renderRightButton={() => <Ionicons onPress={() => this.signOutUser()} name="md-log-out" size={32} color="gray" />}
          />
          <Scene
            key="home"
            component={HomeView}
            title='Elegí adonde ir'
            hideNavBar={false}
            renderRightButton={() => <Ionicons onPress={() => this.signOutUser()} name="md-log-out" size={32} color="gray" />}
          />
          <Scene
            key="restoDetail"
            component={RestoDetailView}
            title='Detalle'
            hideNavBar={false}
            renderRightButton={() => <Ionicons onPress={() => this.signOutUser()} name="md-log-out" size={32} color="gray" />}
          />
          <Scene
            key="reserve"
            component={ReserveView}
            title='Reservando'
            hideNavBar={false}
            renderRightButton={() => <Ionicons onPress={() => this.signOutUser()} name="md-log-out" size={32} color="gray" />}
          />
          <Scene
            key="mp"
            component={MercadoPagoView}
            title='Pagá tu reserva'
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
