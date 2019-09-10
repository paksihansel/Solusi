
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

  render(){
    return(
      <View style={{flex: 1}}>
       <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
       <View style={{height: 40, backgroundColor: '#48D1CC', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, color: 'white', fontFamily: 'SF-Compact-Text-Regular'}}>Setting</Text>
          </View>
       <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}>
        <TextInput style={{marginLeft: 10, marginTop: 15}}
        placeholder="Password Saat Ini"
        secureTextEntry={true}>
        </TextInput>
        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1,marginLeft: 10, marginRight: 20, marginTop: 1}}/>
        <TextInput style={{marginLeft: 10, marginTop: 15}}
        placeholder="Password Baru"
        secureTextEntry={true}>
        </TextInput>
        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1,marginLeft: 10, marginRight: 20, marginTop: 1}}/>
        <TextInput style={{marginLeft: 10, marginTop: 15}}
        placeholder="Konfimasi Password "
        secureTextEntry={true}>
        </TextInput>
        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1,marginLeft: 10, marginRight: 20, marginTop: 1}}/>
       </View> 

       <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, marginBottom: 30}}>
            <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', backgroundColor: '#6495ED', marginTop: 30, width: 100, height: 40, borderRadius: 5}}
            onPress={() => alert('Submit Form Sucsees')}
            >
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Submit</Text>
            </TouchableOpacity>
          </View>

       </ScrollView>
  </View>
    )
  }
}


	
	
	
