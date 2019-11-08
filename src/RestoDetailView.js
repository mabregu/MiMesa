import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import RestoBox from './RestoBox';
import CommentList from './CommentList';
import { getResto } from './services/ApiClient';
import { Ionicons } from '@expo/vector-icons';
import { firebaseDatabase, firebaseAuth } from './services/firebase'
import {Actions} from 'react-native-router-flux'

export default class RestoDetailView extends Component {
    state = {
      text: '',
      comments: []
    }

    componentDidMount() {
      this.getRestoCommentsRef().on('child_added', this.addComponent);
    }

    componentWillUnmount() {
      this.getRestoCommentsRef().off('child_added', this.addComponent);
    }

    addComponent =  (data) => {
      const comment = data.val()
      this.setState({
        comments: this.state.comments.concat(comment)
      })
    }

    handleSend = () => {
      const { text } = this.state
      const restoCommentsRef = this.getRestoCommentsRef()
      const { uid, photoURL } = firebaseAuth.currentUser

      if (text != '') {
        var newCommentRef = restoCommentsRef.push()
        newCommentRef.set({
          text,
          userPhoto: photoURL,
          uid,
        })
        this.setState({ text: '' })
      } else {
        Alert.alert('No escribiste nada!')
      }
    }

    getRestoCommentsRef = () => {
      const { id } = this.props.resto
      return firebaseDatabase.ref(`comments/${id}`)
    }

    handleChangeText = (text) => this.setState({text})

    handleReserve = () => {
      Actions.reserve()
    }

    render() {
      const restos = this.props.resto
      const { comments } = this.state

      return (
        <View style={styles.container}>
          <RestoBox restos={restos} />
          <TouchableOpacity onPress={this.handleReserve}>
            <Image source={require('./img/RESERVAR.png')} style={styles.reserva} />
          </TouchableOpacity>
          <CommentList comments={comments} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.text}
              placeholder="Déjanos tu opinion!"
              onChangeText={ this.handleChangeText }
              value={this.state.text}
              />
            <TouchableOpacity onPress={this.handleSend}>
              <Ionicons name="md-send" size={32} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android: 10,
    })
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  inputContainer: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 50,
    flex: 1
  },
  reserva: {
    width: 370,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
