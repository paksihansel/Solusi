
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
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}
        onPress={() => this.props.navigation.navigate('InfoAkun')}>
         <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20}}>
          <Text style={{fontSize: 18}}>Informasi Akun</Text>
          </View>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20}}>
          <Text style={{fontSize: 18}}>Lengkapi Data</Text>
          </View>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20}}>
          <Text style={{fontSize: 18}}>Ganti Bahasa</Text>
          </View>
        </TouchableOpacity>
       </View> 

       </ScrollView>
  </View>
    )
  }
}


	
	
	