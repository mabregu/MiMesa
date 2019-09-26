import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import RestoList from './src/RestoList';

export default class App extends Component {
    render() {
      const resto = {
        image: 'https://blog.restorando.com/wp-content/uploads/2017/10/osso.jpg',
        name: 'Comida de Sueños',
        likes: 200,
        comments: 140,
      }
      const restos = Array(500).fill(resto)

      return (
        <View style={styles.container}>
          <RestoList restos={restos} />
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
