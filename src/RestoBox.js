import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { firebaseDatabase, firebaseAuth } from './services/firebase'

//const { image, name, likes, comments } = this.props.restos
export default class RestoBox extends Component {
//export default function RestoBox() {
  state = {
    liked: false,
    likeCount: 0,
    commentCount: 0,
  }

  componentWillMount() {
    const { uid } = firebaseAuth.currentUser.uid
    this.getRestoRef().on('value', snapshot => {
      const resto = snapshot.val()
      if (resto) {
        this.setState({
          likeCount: resto.likeCount,
          commentCount: resto.commentCount,
          liked: resto.likes && resto.likes[uid]
        })
      }
    })
  }

  handlePress = () => {
    //this.setState({ liked: !this.state.liked })
    this.toggleLike(!this.state.liked)
  }

  getRestoRef = () => {
    const { id } = this.props.restos
    return firebaseDatabase.ref(`resto/${id}`)
  }

  toggleLike = (liked) => {
    const { uid } = firebaseAuth.currentUser.uid
    this.getRestoRef().transaction(function(resto) {
      if (resto) {
        if (resto.likes && resto.likes[uid]) {
          resto.likeCount--;
          resto.likes[uid] = null;
        } else {
          resto.likeCount++;
          if (!resto.likes) {
            resto.likes = {};
          }
          resto.likes[uid] = true;
        }
      }
      return resto || {
        likeCount: 1,
        likes: {
          [uid]: true
        }
      };
    });
  }

  render() {
    const { name, image, likes, comments } = this.props.restos
    const likeIcon = this.state.liked ?
      <Ionicons name="md-heart" size={32} color="#e74c3c" /> :
      <Ionicons name="md-heart-empty" size={32} color="gray" />
    const commentIcon = this.state.commented ?
      <Ionicons name="md-chatbubbles" size={32} color="blue" /> :
      <Ionicons name="md-chatbubbles" size={32} color="gray" />

    const { likeCount } = this.state
    return (
      <View style={styles.restoBox}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={this.handlePress}>
                {likeIcon}
              </TouchableOpacity>
              <Text style={styles.count}>{likeCount}</Text>
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
