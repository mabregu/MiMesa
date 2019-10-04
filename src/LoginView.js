import React, {Component} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default class LoginView extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Bienvenidos a MiMesa!
          </Text>
            <Button onPress={AuthService.loginWithFacebook} title='Login with Facebook' />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  }
});
