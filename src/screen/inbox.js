/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
let time = new Date().toLocaleString();
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import * as Progress from 'react-native-progress';

export default class Profile extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){
    return(
      <View style={{flex: 1}}>
       <View style={{flex: 1, backgroundColor: '#78cbff'}}>

        <Image style={{width: '100%', height: '100%'}} source= {require('../icon/png/under.jpg')}/>
       </View>

        
         {/* Navigation bar*/}

        <View style={{height: 56,  flexDirection: 'row'}}>

    <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Home')}>
      <Image style={{width: 26, height: 26}} source = {require('../icon/home.png')}/>
      <Text style={styles.textnav}>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('News')}>
      <Image style={{width: 26, height: 26}} source = {require('../icon/help.png')}/>
      <Text style={styles.textnav}>help</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Inbox')}>
      <Image style={{width: 26, height: 26}} source = {require('../icon/inbox-active.png')}/>
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



	
	
	
