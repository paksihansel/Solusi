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
import { Fonts } from "./tabscreen/fonts";

export default class Task extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){
    return(
      <View style={{flex: 1}}>
        {/*Searchbar*/}
        <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column'}}>

        <View style={{height: 50, backgroundColor: '#48D1CC',justifyContent: 'center'}}>
        <View style={{ alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: 'white', fontFamily: Fonts.Varella}}>Task</Text>
            </View>
        </View>


        <Image  style={{width:200, height: 100, marginHorizontal: 90}}
          			source={require('../icon/logo.png')}/>

        <View style={{marginTop: 15, paddingLeft: 16}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Project</Text>
        </View>

       
        
       

        </ScrollView>
      </View>
    )
  }
}
  
