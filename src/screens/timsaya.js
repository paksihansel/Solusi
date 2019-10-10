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
  TouchableOpacity,
  Alert,
  alertMessage
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Fonts } from './tabscreen/fonts';


export default class Profile extends Component{

  static navigationOptions = {
    header: null,
  }


  onButtonPress = () => {
    this.props.navigation.navigate('Home')
 }

  render(){
    return(
      <View style={{flex: 1}}>
       <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
          <View style={{height: 40, backgroundColor: '#48D1CC', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, color: 'white', fontFamily: 'SF-Compact-Text-Regular'}}>Tim Saya</Text>
          </View>

          <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}>
          <View style={{marginLeft: 10, marginTop: 15, flexDirection: 'row'}}>
        <Image source = {require('../icon/divisi.png')} style={{width: 60, height: 50}}/>
          <View style={{flexDirection: 'column', marginLeft: 20}}>
          <Text style={{fontSize: 18, fontWeight:'bold'}}>Divisi</Text>
          <Text style={{fontSize: 18, marginTop: 10}}>Frontend</Text>
          </View>
        </View>
        <View style={{marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 10}}/>

        <View style={{marginLeft: 10, marginTop: 15, flexDirection: 'row'}}>
        <Image source = {require('../icon/ketua.png')} style={{width: 50, height: 50}}/>
          <View style={{flexDirection: 'column', marginLeft: 20}}>
          <Text style={{fontSize: 18, fontWeight:'bold'}}>Ketua Divisi</Text>
          <Text style={{fontSize: 18, marginTop: 10}}>M Raflesh</Text>
          </View>
        </View>
        <View style={{marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 10}}/>

        <View style={{marginLeft: 10, marginTop: 15, flexDirection: 'row'}}>
        <Image source = {require('../icon/anggota.png')} style={{width: 60, height: 45}}/>
          <View style={{flexDirection: 'column', marginLeft: 20}}>
          <Text style={{fontSize: 18, fontWeight:'bold'}}>Anggota</Text>
          <Text style={{fontSize: 18, marginTop: 10}}>Salma iqoh</Text>
          <Text style={{fontSize: 18, marginTop: 10}}>Rades Naufal</Text>
          <Text style={{fontSize: 18, marginTop: 10}}>Tri Turut</Text>

          </View>
        </View>
       </View> 
          

       

      </ScrollView>
   </View>
    )
  }
}



	
	
	
