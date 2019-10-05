import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FBSDK, {LoginButton, AccessToken} from "react-native-fbsdk";

export default class LoginView extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Bienvenidos a MiMesa!
          </Text>

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
