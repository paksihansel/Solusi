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
       <ScrollView style={{flex: 1, backgroundColor: '#78cbff'}}>
          <View style={{height: 40, backgroundColor: '#4173a5', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, color: 'white'}}>Pofile</Text>
          </View>

       <View style={{paddingTop:30, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Image source = {require('../icon/Dewi.jpg')} style={{width: 100, height: 100, borderRadius: 100/2, borderWidth: 3, borderColor: 'black'}}/>
       </View>
          <View style={{paddingTop:1, paddingBottom:30, paddingLeft: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Nama</Text>
            <Text style={{fontSize: 11, color: 'grey', marginTop: 3}}>Dewi Ambarwati</Text>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 40, marginTop: 4}}/>

            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Gender</Text>
            <Text style={{fontSize: 11, color: 'grey', marginTop: 3}}>Shemale</Text>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 40, marginTop: 4}}/>

            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Phone</Text>
            <Text style={{fontSize: 11, color: 'grey', marginTop: 3}}>087838638932</Text>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 40, marginTop: 4}}/>

            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Address</Text>
            <Text style={{fontSize: 11, color: 'grey', marginTop: 3}}>Kaliurang city, Yogyakarta</Text>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 40, marginTop: 4}}/>

            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Divisi</Text>
            <Text style={{fontSize: 11, color: 'grey', marginTop: 3}}>Frontend</Text>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 40, marginTop: 4}}/>
            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10,backgroundColor: 'white'}}>
            <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', backgroundColor: '#468ace', marginTop: 20, width: 100, height: 30, borderRadius: 5}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Edit Profil</Text>
            </TouchableOpacity>
          </View>

          </View>


          <View style={{paddingTop:1, paddingBottom:30, paddingLeft: 10, marginHorizontal: 10, marginTop: 10, backgroundColor: 'white', flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 3}}>Account</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 15}}>Email</Text>
            <Text style={{fontSize: 11, color: 'grey', marginTop: 3}}>Dewi123@gmail.com</Text>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 40, marginTop: 4}}/>

            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Password</Text>
            <Text style={{fontSize: 11, color: 'grey', marginTop: 3}}>**********</Text>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 40, marginTop: 4}}/>
            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10,backgroundColor: 'white'}}>
            <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', backgroundColor: '#468ace', marginTop: 20, width: 100, height: 30, borderRadius: 5}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Edit Profil</Text>
            </TouchableOpacity>
             </View>

            <View style={{marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
              <Text>ATAU</Text>
            </View>

             <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10,backgroundColor: 'white'}}>
            <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', backgroundColor: '#468ace', width: 100, height: 30, borderRadius: 5}}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>LogOut</Text>
            </TouchableOpacity>
             </View>


            
          </View>

       </ScrollView>

        
         {/* Navigation bar*/}

        <View style={{height: 56,  flexDirection: 'row'}}>

            <View style={styles.Containernav}>
             <Image style={{width: 26, height: 26}} source = {require('../icon/home.png')}/>
              <Text style={styles.textnav}>Home</Text>
            </View>          
              
            <View style={styles.Containernav}>
            <Image style={{width: 26, height: 26}} source = {require('../icon/help.png')}/>
              <Text style={styles.textnav}>help</Text> 
              </View>
              
            <View style={styles.Containernav}>
            <Image style={{width: 26, height: 26}} source = {require('../icon/inbox.png')}/>
              <Text style={styles.textnav}>inbox</Text> 
              </View>
          
            <View style={styles.Containernav}>
            <Image style={{width: 26, height: 26}} source = {require('../icon/account-active.png')}/> 
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

});



	
	
	
