import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RestoBox from './RestoBox';
import { getResto } from './api-client';

export default class RestoDetailView extends Component {

    render() {
      const restos = this.props.resto

      return (
        <View style={styles.container}>
          <RestoBox restos={restos} />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  }
});
