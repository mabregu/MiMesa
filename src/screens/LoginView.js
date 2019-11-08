import React, {Component} from 'react'
import {
  StyleSheet, Text, View, Alert, Image, ActivityIndicator
} from 'react-native';
import { SocialIcon, Header, Button } from 'react-native-elements'
import { signInWithFacebook, signInWithGoogleAsync } from '../services/auth';
import firebase, { firebaseAuth } from '../services/firebase'
import {Actions} from 'react-native-router-flux'


export default class LoginView extends Component {
    state = {
      userInfo: null
    }

    checkIfLoggedIn = () => {
      firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            userInfo: user
          })
          Actions.home()
        }
      })
    }

    handlePress() {
      signInWithFacebook()
        .then(data => {
          if(data.type == 'success')
            Actions.home()
        })
    }

    handlePressGoogle() {
      signInWithGoogleAsync()
        .then(data => {
          if(data.type == 'success')
            Actions.home()
        })
    }

    componentDidMount() {
      this.checkIfLoggedIn()
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 25,fontWeight: 'bold',textAlign: 'center'}}>
            Iniciar sesión
          </Text>
          <SocialIcon
            title='Facebook'
            onPress={() => this.handlePress()}
            button
            type='facebook'
            />
          <SocialIcon
            title='Google'
            onPress={() => this.handlePressGoogle()}
            button
            type='google'
            />
          <SocialIcon
            title='Correo eléctronico'
            onPress={() => Alert.alert('Falta integrar login')}
            button
            style={{backgroundColor: 'green'}}
            />

          <Image
            source={{uri: 'http://flaviatuteacher.com/img/restaurant.png'}}
            PlaceholderContent={<ActivityIndicator size="large" color="#27ae60" />}
            style={styles.mesa}
          />

          <SocialIcon
            title='Registrarme'
            onPress={() => Alert.alert('Falta integrar registro')}
            button
            style={{backgroundColor: 'black'}}
          />
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  mesa: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal: 5,
    width: 350,
  }
});
