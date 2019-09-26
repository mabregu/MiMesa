import React, {Component} from 'react';
import { StyleSheet, ListView } from 'react-native';
import RestoBox from './RestoBox';

//export default function App() {
export default class RestoList extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(props.restos),
      };
    }

    render() {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(restos) => <RestoBox restos={restos} />}
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
