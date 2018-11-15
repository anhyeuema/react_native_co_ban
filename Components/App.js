
import React, {Component} from 'react';
import { Text, View, ListView } from 'react-native';

var DATA = [
  { khoahoc:"lap trinh android", giangvien:"nguyen van nam"},
  { khoahoc:"lap trinh ios", giangvien:"nguyen van thang"},
  { khoahoc:"lap trinh php", giangvien:"nguyen thanh trung"},
  { khoahoc:"lap trinh laravel", giangvien:"tran quang hai"},
];

export default class App extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(DATA),
    };
  }

  taoHang(property) {
    return(
      <View>
        <Text>{property.khoahoc}</Text>
        <Text>{property.giangvien}</Text>
      </View>
    );
  }
  render() {
    return(
      <View style={{ flex: 1 }}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.taoHang}
        />
      </View>
    );
  }
}
