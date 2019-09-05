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

      <View style={{height: 56,  flexDirection: 'row'}}>

      <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Home')}>
        <Image style={{width: 26, height: 26}} source = {require('../icon/home-active.png')}/>
        <Text style={styles.textnav}>Home</Text>
      </TouchableOpacity>          
    
      <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Inbox')}>
        <Image style={{width: 26, height: 26}} source = {require('../icon/inbox.png')}/>
        <Text style={styles.textnav}>inbox</Text> 
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Profile')}>
        <Image style={{width: 26, height: 26}} source = {require('../icon/account.png')}/>
        <Text style={styles.textnav}>account</Text> 
      </TouchableOpacity>
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
    marginHorizontal: 30,
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
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: 'white',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


	
	
	
