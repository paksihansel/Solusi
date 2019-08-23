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
        source={{uri: 'https://www.kompas.com/'}}
        style={{marginTop: 20}}
      />
              <View style={{height: 56,  flexDirection: 'row'}}>

  <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Home')}>
  <Image style={{width: 26, height: 26}} source = {require('../icon/home.png')}/>
  <Text style={styles.textnav}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('News')} >
  <Image style={{width: 26, height: 26}} source = {require('../icon/help-active.png')}/>
  <Text style={styles.textnav}>help</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.Containernav}onPress={() =>this.props.navigation.navigate('Inbox')}>
  <Image style={{width: 26, height: 26}} source = {require('../icon/inbox.png')}/>
  <Text style={styles.textnav}>inbox</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Profile')}>
  <Image style={{width: 26, height: 26}} source = {require('../icon/account.png')}/>
  <Text style={styles.textnav}>account</Text>
  </TouchableOpacity>
    </View>





  </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textnav: {
      fontSize: 10,
      color: '#545454',
      marginTop: 4
    },
    ImageStyle:{
      width: 26,
      height: 26
    },
    Containernav:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
  });


