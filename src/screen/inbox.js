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

         <View style={{height: 59,  flexDirection: 'row'}}>

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Home')}>
  <Image style={{width: 22, height: 22}} source = {require('../menu/home-abu.png')}/>
  <Text style={styles.textnav}>Home</Text>
</TouchableOpacity>          

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Inbox')}>
  <Image style={{width: 22, height: 22}} source = {require('../menu/button-inbox.png')}/>
  <Text style={styles.textnav}>inbox</Text> 
</TouchableOpacity>

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Profile')}>
  <Image style={{width: 22, height: 22}} source = {require('../menu/profile-abu.png')}/>
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



	
	
	
