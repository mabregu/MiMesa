import React, {Component} from 'react';
import { StyleSheet, View, ActivityIndicator, Platform, Text } from 'react-native';
import RestoList from '../RestoList';
import { getResto } from '../services/ApiClient';

export default class HomeView extends Component {
    constructor(props) {
      super(props);
    }

    _isMounted = false

    state = {
      restos: null
    }

    componentDidMount() {
      this._isMounted = true
      getResto(this.props.data)
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
          { !restos && <ActivityIndicator size='large' /> }
          { restos && <RestoList restos={restos} /> }
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android: 10,
    })
  }
});
