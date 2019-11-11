import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import RestoBox from './RestoBox';
import {Actions} from 'react-native-router-flux'

export default class RestoList extends Component {
    constructor(props) {
      super(props);
    }

    handlePress(resto) {
      //console.warn(resto);
      Actions.restoDetail({ resto })
    }

    render() {
      return (
        <FlatList
          data={this.props.restos}
          renderItem={(item) => (
            <TouchableOpacity underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.handlePress(item)}>
              <RestoBox restos={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => `${item.id}`}
        />
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
