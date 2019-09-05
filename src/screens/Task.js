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
          			source={require('../icon/png/logo.png')}/>

        <View style={{marginTop: 15, paddingLeft: 16}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Project</Text>
        </View>

        <TouchableOpacity style={{flexDirection: 'column', paddingTop: 10, paddingBottom: 10, paddingRight: 10,paddingLeft: 6, marginTop: 10, marginHorizontal: 16, backgroundColor: 'white',borderRadius: 3}}
          onPress={() =>this.props.navigation.navigate('SubTask')}
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Membangun Web</Text>
            <View style={{width: 150, height: 20, borderRadius: 10, backgroundColor: '#42cf89', alignItems: 'center', justifyContent: 'center'}}>
              <Text>On Progress</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text>3/7 Task</Text>  
              <Text style={{marginLeft: 10}}>{time}</Text>
          </View>
        </TouchableOpacity>
        

        <TouchableOpacity style={{flexDirection: 'column', paddingTop: 10, paddingBottom: 10, paddingRight: 10,paddingLeft: 6, marginTop: 10, marginHorizontal: 16, backgroundColor: 'white',borderRadius: 3}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Membangun Struktur Data</Text>
            <View style={{width: 150, height: 20, borderRadius: 10, backgroundColor: '#42cf89', alignItems: 'center', justifyContent: 'center'}}>
              <Text>On Progress</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text>3/7 Task</Text>  
              <Text style={{marginLeft: 10}}>{time}</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={{flexDirection: 'column', paddingTop: 10, paddingBottom: 10, paddingRight: 10,paddingLeft: 6, marginTop: 10, marginHorizontal: 16, backgroundColor: 'white',borderRadius: 3}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Menyambungkan Server</Text>
            <View style={{width: 150, height: 20, borderRadius: 10, backgroundColor: '#c33345', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Waiting</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text>3/7 Task</Text>  
              <Text style={{marginLeft: 10}}>{time}</Text>
          </View>
        </TouchableOpacity>



        <TouchableOpacity style={{flexDirection: 'column', paddingTop: 10, paddingBottom: 10, paddingRight: 10,paddingLeft: 6, marginTop: 10, marginHorizontal: 16, backgroundColor: 'white',borderRadius: 3}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Upload</Text>
            <View style={{width: 150, height: 20, borderRadius: 10, backgroundColor: '#c33345', alignItems: 'center', justifyContent: 'center'}}>
              <Text>Waiting</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text>3/7 Task</Text>  
              <Text style={{marginLeft: 10}}>{time}</Text>
          </View>
              

        </TouchableOpacity>
        
       

        </ScrollView>
      </View>
    )
  }
}
  
