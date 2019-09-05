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
            <Text style={{fontSize: 18, color: 'white', fontFamily: 'SF-Compact-Text-Regular'}}>Pofile</Text>
          </View>

       <View style={{paddingTop:30, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white',alignItems: 'center', justifyContent: 'center'}}>
          <Image source = {require('../icon/Dewi.jpg')} style={{width: 100, height: 100, borderRadius: 100/2, borderWidth: 3, borderColor: 'black'}}/>
          <Text style={{fontSize: 15}}>Dewi Ambar sari</Text>
          <Text style={{fontSize: 15}}s>Frontend</Text>
       </View>

       <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}>
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'VarelaRound-Regular'}}>Detail Profile</Text>
        </View>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}} 
          onPress={() =>this.props.navigation.navigate('ProfileUser')}
          >
          <Text style={{fontSize: 18, fontFamily: Fonts.Varella}}>Profile User</Text>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}>
          <Text style={{fontSize: 18}}>Data Keluarga</Text>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}>
          <Text style={{fontSize: 18}}>Data Perusahaan</Text>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        </TouchableOpacity>
       </View> 

       <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}>
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Lainnya</Text>
        </View>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}>
          <Text style={{fontSize: 18}}>Visi dan Misi</Text>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}>
          <Text style={{fontSize: 18}}>About</Text>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}>
          <Text style={{fontSize: 18}}>Setting</Text>
          <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        </TouchableOpacity>
       </View> 

       
        <TouchableOpacity 
          style={{marginHorizontal: 10, paddingTop:10, paddingBottom:20,  backgroundColor: 'white', marginTop: 10, marginBottom: 10}}
          onPress={() => Alert.alert(
            'Logout',
            alertMessage,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => this.onButtonPress()},
            ]
          )}
          >
          
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 18}}>Logout</Text>
          </View>
        </TouchableOpacity>
  




       </ScrollView>

        
         {/* Navigation bar*/}

         <View style={{height: 59,  flexDirection: 'row'}}>

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Home')}>
  <Image style={{width: 22, height: 22}} source = {require('../menu/home-abu.png')}/>
  <Text style={styles.textnav}>Home</Text>
</TouchableOpacity>          

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Inbox')}>
  <Image style={{width: 22, height: 22}} source = {require('../menu/inbox-abu.png')}/>
  <Text style={styles.textnav}>inbox</Text> 
</TouchableOpacity>

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Profile')}>
  <Image style={{width: 22, height: 32}} source = {require('../menu/button-profile.png')}/>
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
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 13, borderRadius: 5,
    marginTop: 20
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
    marginHorizontal: 16,
    marginTop: 15
  },
  containersub:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 18,
    marginTop: 20
  },
  fiturbox:{
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: 'white',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


	
	
	
