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

export default class SubTask extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){
    return(
      <View style={{flex: 1}}>
        {/*Searchbar*/}
        <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
        <View style={{height: 50, backgroundColor: '#48D1CC', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}>Task</Text>
        </View>
        
        <View style={{marginTop: 15, paddingLeft: 16}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Project Khusus</Text>
        </View>

        <View style={{marginTop: 15, paddingLeft: 16}}>
          <Text style={{fontSize: 18}}>{time}</Text>
        </View>


        <View style={{flexDirection: 'column', paddingTop: 10, paddingBottom: 10, paddingRight: 10,paddingLeft: 6, marginTop: 10, marginHorizontal: 16, backgroundColor: 'white',borderRadius: 3}}>
              <Text>Task 1</Text>
            <View style={{marginTop: 10, paddingBottom: 10 }}>
                <Progress.Bar progress={0.3} width={200} color={'#23C7C6'} style={{backgroundColor: '#E6E6E6'}} />
            </View>
        </View>

        <View style={{flexDirection: 'column', paddingTop: 10, paddingBottom: 10, paddingRight: 10,paddingLeft: 6, marginTop: 10, marginHorizontal: 16, backgroundColor: 'white',borderRadius: 3}}>
              <Text>Task 1</Text>
            <View style={{marginTop: 10, paddingBottom: 10 }}>
                <Progress.Bar progress={0.6} width={200} color={'#23C7C6'} style={{backgroundColor: '#E6E6E6'}} />
            </View>
        </View>

        <View style={{flexDirection: 'column', paddingTop: 10, paddingBottom: 10, paddingRight: 10,paddingLeft: 6, marginTop: 10, marginHorizontal: 16, backgroundColor: 'white',borderRadius: 3}}>
              <Text>Task 1</Text>
            <View style={{marginTop: 10, paddingBottom: 10 }}>
                <Progress.Bar progress={0.9} width={200} color={'#23C7C6'} style={{backgroundColor: '#E6E6E6'}} />
            </View>
        </View>
        
        

      
        
       

        </ScrollView>
      </View>
    )
  }
}
  
