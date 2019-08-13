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

export default class APP extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        {/*Searchbar*/}
        <ScrollView style={{flex: 1, backgroundColor: '#78cbff'}}>
          <View style={{marginHorizontal: 17, marginTop: 10}}>
            <View style={{position: 'relative'}}>
              <TextInput placeholder="What do you want?" style={styles.searchbar}/>
              <Image source={require('./src/icon/search.png')} style={styles.logoStyle}/>
            </View>
            <View></View>
          </View>
        
        {/*blokprofile*/} 
        <View style={styles.Containerbox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>Dewi Ambarwati</Text>
            <Text style={styles.name}>Frontend</Text>         
          </View>
          <View style={styles.boxprogress}>
            <Text style={styles.Namebox}>Progress</Text>
            <Text style={styles.Namebox}>{time}</Text>
          </View>
          <ScrollView style={styles.boxperkembangan}>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.namatask}>Task 1</Text>
            <Progress.Bar progress={0.3} width={200} />
            <Text style={styles.namatask}>Task 2</Text>
            <Progress.Bar progress={0.9} width={200} />
            <Text style={styles.namatask}>Task 3</Text>
            <Progress.Bar progress={0.5} width={200} color={'#3bff71'} />
            </View>
          </ScrollView>
           
        </View>

        {/* Fitur */}
        
        <View style={styles.containerfitur}>

          <View style={styles.containersub}>
            <TouchableOpacity style={styles.fiturbox}>
              <Image style={{width: 26, height: 26}} source = {require('./src/icon/task.png')}/>
              <Text style={styles.textnav}>Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiturbox}>
              <Image style={{width: 26, height: 26}} source = {require('./src/icon/png/001-calendar.png')}/>
              <Text style={styles.textnav}>Cuti</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiturbox}>
              <Image style={{width: 26, height: 26}} source = {require('./src/icon/png/004-music.png')}/>
              <Text style={styles.textnav}>music</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containersub}>
            <TouchableOpacity style={styles.fiturbox}>
              <Image style={{width: 26, height: 26}} source = {require('./src/icon/png/003-radio.png')}/>
              <Text style={styles.textnav}>Radio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiturbox}>
              <Image style={{width: 26, height: 26}} source = {require('./src/icon/png/002-inventory.png')}/>
              <Text style={styles.textnav}>Iventaris</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiturbox}>
              <Image style={{width: 26, height: 26}} source = {require('./src/icon/home-active.png')}/>
              <Text style={styles.textnav}>Home</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Solusi Information */}
        <View style={{paddingLeft: 20, marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Solusi Informasi</Text>
        </View>

        <TouchableOpacity style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', marginHorizontal: 16, marginTop: 5 }}>
          <Image style={{ height: 70, width: 70, borderRadius: 6}} source= {require('./src/icon/welcome.png')}/>
        <View style={{flexDirection: 'column', marginHorizontal: 16, flex: 1}}>
          <Text style={{paddingLeft: 5, fontSize: 15, fontWeight: 'bold' }}>Perayaan Untuk Karyawan Baru</Text>
          <Text style={{paddingLeft: 5, marginTop: 10, color: 'grey' }}>Perayaan Untuk Karyawan Baru dari Smk negeri 2 depok sleman</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', marginHorizontal: 16, marginTop: 5 }}>
          <Image style={{ height: 70, width: 70, borderRadius: 6}} source= {require('./src/icon/welcome.png')}/>
        <View style={{flexDirection: 'column', marginHorizontal: 16, flex: 1}}>
          <Text style={{paddingLeft: 5, fontSize: 15, fontWeight: 'bold' }}>Perayaan Untuk Karyawan Baru</Text>
          <Text style={{paddingLeft: 5, marginTop: 10, color: 'grey' }}>Perayaan Untuk Karyawan Baru dari Smk negeri 2 depok sleman</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 10, paddingBottom: 10, backgroundColor: 'white', marginHorizontal: 16, marginTop: 5 }}>
          <Image style={{ height: 70, width: 70, borderRadius: 6}} source= {require('./src/icon/welcome.png')}/>
        <View style={{flexDirection: 'column', marginHorizontal: 16, flex: 1}}>
          <Text style={{paddingLeft: 5, fontSize: 15, fontWeight: 'bold' }}>Perayaan Untuk Karyawan Baru</Text>
          <Text style={{paddingLeft: 5, marginTop: 10, color: 'grey' }}>Perayaan Untuk Karyawan Baru dari Smk negeri 2 depok sleman</Text>
        </View>
        </TouchableOpacity>       


        </ScrollView>

         {/* Navigation bar*/}

        <View style={{height: 56,  flexDirection: 'row'}}>

            <View style={styles.Containernav}>
             <Image style={{width: 26, height: 26}} source = {require('./src/icon/home-active.png')}/>
              <Text style={styles.textnav}>Home</Text>
            </View>          
              
            <View style={styles.Containernav}>
            <Image style={{width: 26, height: 26}} source = {require('./src/icon/help.png')}/>
              <Text style={styles.textnav}>help</Text> 
              </View>
              
            <View style={styles.Containernav}>
            <Image style={{width: 26, height: 26}} source = {require('./src/icon/inbox.png')}/>
              <Text style={styles.textnav}>inbox</Text> 
              </View>
          
            <View style={styles.Containernav}>
            <Image style={{width: 26, height: 26}} source = {require('./src/icon/account.png')}/> 
              <Text style={styles.textnav}>account</Text> 
              </View>
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
  searchbar:{
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  logoStyle:{
    position: 'absolute',
    top: 6,
    left: 12
  },
  name:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20 
  },
  Namebox:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    marginHorizontal: 11
  },
  Containerbox:{
    marginHorizontal: 12,
    marginTop: 8
  },
  boxprogress:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#084ba8',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 15
  },
  boxperkembangan:{
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingLeft: 3
  },
  namatask:{
    paddingLeft: 5,
    marginTop: 5
  },
  containerfitur:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 30,
    marginTop: 15
  },
  containersub:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 18
  },
  fiturbox:{
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    backgroundColor: 'white',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  }
});



	
	
	
