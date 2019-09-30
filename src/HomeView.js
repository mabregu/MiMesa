import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import RestoList from './RestoList';
import { getResto } from './api-client';

export default class HomeView extends Component {
    _isMounted = false

    state = {
      restos: []
    }

    componentDidMount() {
      this._isMounted = true
      getResto()
      .then(data => {
        if (this._isMounted) {
          this.setState({
            restos: data
          })
        }
      })
    }

    componentWillUnmount() {
      this._isMounted = false
    }

    render() {
      const restos = this.state.restos
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
