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




export default class Gaji extends Component{
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
              <Text style={{fontSize: 20, color: 'white', fontFamily: Fonts.Varella}}>Peminjaman</Text>
            </View>
        </View>


        <View style={{marginTop: 15, paddingLeft: 16, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, flexDirection: 'row'}}>
          <Text style={{fontSize: 18, alignItems: 'center'}}>Nama Barang</Text>
          <TextInput style={{backgroundColor: 'white', height: 40, width: 150}}
          placeholder='ex: Laptop'/>
        </View>

        <View style={{marginTop: 15, paddingLeft: 16, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, flexDirection: 'row'}}>
          <Text style={{fontSize: 18, alignItems: 'center'}}>Seri Barang</Text>
          <TextInput style={{backgroundColor: 'white', height: 40, width: 150}}
          placeholder='ex: Asus A405U'/>
        </View>

        <View style={{marginTop: 15, paddingLeft: 16, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, flexDirection: 'row'}}>

          <Text style={{fontSize: 18, alignItems: 'center'}}>Jumlah Barang</Text>
          <TextInput style={{backgroundColor: 'white', height: 40, width: 50, right: 100}}
          placeholder='ex: 1'/>
        </View>

        <View style={{marginTop: 15, paddingLeft: 16, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, flexDirection: 'row'}}>
          <Text style={{fontSize: 18, alignItems: 'center'}}>Tanggal Mulai</Text>
          <TextInput style={{backgroundColor: 'white', height: 40, width: 150}}
          placeholder='ex: dd/mm/yy'/>
        </View>

        <View style={{marginTop: 15, paddingLeft: 16, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, flexDirection: 'row'}}>
          <Text style={{fontSize: 18, alignItems: 'center'}}>Tanggal Selesai</Text>
          <TextInput style={{backgroundColor: 'white', height: 40, width: 150}}
          placeholder='ex: dd/mm/yy'/>
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
  
