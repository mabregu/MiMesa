import React, {Component} from 'react';
import { StyleSheet, ListView, TouchableOpacity } from 'react-native';
import RestoBox from './RestoBox';
import {Actions} from 'react-native-router-flux'

//export default function App() {
export default class RestoList extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds
      }
    }

    componentDidMount() {
      this.updateDataSource(this.props.restos)
    }

    componentWillReceiveProps(newProps) {
      if (newProps.restos !== this.props.restos) {
        this.updateDataSource(newProps.restos)
      }
    }

    updateDataSource = (data) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      })
    }

    handlePress(resto) {
      //console.warn(resto);
      Actions.restoDetail({ resto })
    }

    render() {
      return (
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          //renderRow={(restos) => <RestoBox restos={restos} />}
          renderRow={(restos) => (
            <TouchableOpacity
              onPress={() => this.handlePress(restos)}>
              <RestoBox restos={restos} />
            </TouchableOpacity>
          )}
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
