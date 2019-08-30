import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity }

from 'react-native'
import { WebView } from "react-native-webview";


export default class App extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.container}>
       <WebView
        source={{uri: 'https://www.detik.com/'}}
        style={{marginTop: 20}}
      />
              





  </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
  
  });


