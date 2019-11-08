import React, {Component} from 'react';
import {Button, StyleSheet, DatePickerAndroid, View, TouchableOpacity, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      date: new Date(),
      dateText: 'Selecciona una fecha'
    }
    this.showDatePicker.bind(this);
  }

  showDatePicker = async (options) => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        let date = new Date(year, month, day);
        let newState = {};
        newState['date'] = date;
        newState['dateText'] = date.toLocaleDateString("en-US");
        this.setState(newState);
      }
    } catch ({code, message}) {
      console.warn(`error `, code, message);
    }
  };

  handlePaga = () => {
    Actions.mp()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25,fontWeight: 'bold',textAlign: 'center'}}>
          Ya casi estamos!
        </Text>
        <Text style={{fontSize: 20,textAlign: 'center'}}>
          Luego de poner la fecha, podes pagar para confirmar Tu Mesa ;)
        </Text>
        <Button title={this.state.dateText} onPress={() => this.showDatePicker({date: this.state.date})}/>
        <TouchableOpacity onPress={this.handlePaga}>
          <Ionicons name="md-card" size={80} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});