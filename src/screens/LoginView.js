import React, {Component} from 'react'
import {
  StyleSheet, Text, View, Alert, Image, ActivityIndicator
} from 'react-native';
import { SocialIcon, Header, Button } from 'react-native-elements'
import { signInWithFacebook } from '../services/auth';
import firebase, { firebaseAuth } from '../services/firebase'
import {Actions} from 'react-native-router-flux'


export default class LoginView extends Component {
    state = {
      userInfo: null
    }

    handlePress() {
      signInWithFacebook()
        .then(data => {
          if(data.type == 'success')
            Actions.home()
        })
    }

    componentDidMount() {
      firebaseAuth.onAuthStateChanged((user) => {
        if (user != null) {
          this.setState({
            userInfo: user
          })
          console.log("We are authenticated now!");
        }
      })
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
            onPress={() => Alert.alert('Falta integrar login')}
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
            PlaceholderContent={<ActivityIndicator />}
            style={styles.mesa}
          />

          <SocialIcon
            title='Registrarme'
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
    marginHorizontal: 50,
    height: 250,
    width: 250,
  }
});
