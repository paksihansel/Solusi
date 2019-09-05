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

import { Dropdown } from 'react-native-material-dropdown';
import { Fonts } from "./tabscreen/fonts";

export default class Gaji extends Component{
  static navigationOptions = {
    header: null,
  }
  render(){
    var data = [{
      value: 'Januari',
    }, {
      value: 'Februari',
    }, {
      value: 'Maret',
    }, {
      value: 'April',
    }, {
      value: 'Mei',
    }, {
      value: 'Juni',
    }, {
      value: 'Juli',
    }, {
      value: 'Agustus',
    }, {
      value: 'September',
    }, {
      value: 'Oktober',
    }, {
      value: 'November',
    }, {
      value: 'Desember',
    }, ];
    return(
      <View style={{flex: 1}}>
        {/*Searchbar*/}
        <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column'}}>

        <View style={{height: 50, backgroundColor: '#48D1CC',justifyContent: 'center'}}>
        <View style={{ alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: 'white', fontFamily: Fonts.Varella}}>Slip Gaji</Text>
            </View>
        </View>


        <View style={{marginTop: 15, paddingLeft: 16, justifyContent: 'space-between',alignItems:'center', marginHorizontal: 16, flexDirection: 'row', }}>
          <Text style={{fontSize: 18}}>Pilih Periode</Text>
          <View style={{backgroundColor: 'white', width: 170, paddingLeft: 10, borderRadius: 10}}>
            <Dropdown
            label="gaji 1 tahun"
        data={data}
      />
      </View>
        </View>

        <View style={{backgroundColor: 'white', marginTop: 20, height: 100, width: 360, marginHorizontal: 16}}>
         <View style={{marginHorizontal: 16, flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingTop: 30, paddingBottom: 30}}>
            <Text style={{fontSize: 20, color: '#48D1CC'}}>Saldo anda</Text>
            <Text style={{fontSize: 20, color: '#48D1CC'}}>Rp. 3.500.000</Text>
         </View>
        </View>


        <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 16, backgroundColor: 'white', flexDirection: 'column'}}> 
        <Text style={{fontSize: 18, marginLeft: 10, fontWeight: 'bold'}}>Detail Gaji</Text> 
        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18}}>Gaji Pokok</Text>
          <Text style={{fontSize: 18}}>Rp. 3.000.000</Text>
        </View>
        
        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18}}>Bonus</Text>
          <Text style={{fontSize: 18}}>Rp. 250.000</Text>
        </View>
        
        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18}}>Uang Makan</Text>
          <Text style={{fontSize: 18}}>Rp. 250.000</Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18}}>Uang Transport</Text>
          <Text style={{fontSize: 18}}>Rp. 000.000</Text>
        </View>

       </View> 
        
        

        
       

        </ScrollView>
      </View>
    )
  }
}
  
