import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DEFAULT_AVATAR = 'https://i0.wp.com/www.tusexosentido.com/wp-content/uploads/2017/04/avatar-default.png?fit=240%2C240&ssl=1'
const AVATAR_SIZE = 32

export default class Comment extends React.Component {
  render() {
    return (
      <View style={styles.comment}>
        {
          this.props.avatar ?
            <Image style={styles.avatar} source={{ uri: this.props.avatar }} /> :
            <Image style={styles.avatar} source={{ uri: DEFAULT_AVATAR }} />
        }
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comment: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  }
})
