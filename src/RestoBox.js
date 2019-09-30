import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//const { image, name, likes, comments } = this.props.restos
export default class RestoBox extends Component {
//export default function RestoBox() {
  render() {
    const { name, image, likes, comments } = this.props.restos

    return (
      <View style={styles.restoBox}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Ionicons name="md-heart-empty" size={32} color="gray" />
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="md-chatbubbles" size={32} color="gray" />
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  restoBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
});
