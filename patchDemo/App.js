import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.ToastRef = null;

  }


  onButtonPress() {
    this.ToastRef.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{ marginTop: 50, width: '100%', height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}
          onPress={() => { this.onButtonPress() }}>
          <Text style={{ color: 'white' }}>Show Toast</Text>
        </TouchableOpacity>

        <Toast ref={(ref) => this.ToastRef = ref} />

      </View>
    );
  }
}
