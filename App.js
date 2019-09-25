import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RestoBox from './RestoBox';

//export default function App() {
export default class App extends Component {
  render() {
    const restos = {
      image: 'https://blog.restorando.com/wp-content/uploads/2017/10/osso.jpg',
      name: 'Comida de Sueños',
      likes: 200,
      comments: 140,
    }

    return (
      <View style={styles.container}>
        <RestoBox restos={restos} />
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
