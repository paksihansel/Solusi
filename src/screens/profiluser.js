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


export default class ProfileUser extends Component{

  static navigationOptions = {
    header: null,
  }
  render(){
    return(
      <View style={{flex: 1}}>
       <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
       <View style={{height: 50, backgroundColor: '#48D1CC',justifyContent: 'center'}}>
        <View style={{ alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: 'white', fontFamily: Fonts.Varella}}>Profile User</Text>
            </View>
        </View>


       <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}> 
        <View style={{marginBottom: 5, marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>Sex</Text>
          <Text style={{fontSize: 18}}>Female</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        
        <View style={{marginBottom: 5, marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>Date of Birth</Text>
          <Text style={{fontSize: 18}}>Unknow</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        
        <View style={{marginBottom: 5, marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>Blood Type</Text>
          <Text style={{fontSize: 18}}>A</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>

        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>Religion</Text>
          <Text style={{fontSize: 18}}>Islam</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>

        <View style={{marginBottom: 5, marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>Email</Text>
          <Text style={{fontSize: 18}}>Dewi.Ambarn@gmail.com</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>

        <View style={{marginBottom: 5, marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>Phone</Text>
          <Text style={{fontSize: 18}}>087xxxxx</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
       </View> 




       <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}> 
        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>KK</Text>
          <Text style={{fontSize: 18}}>Copy</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        
        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>KTP</Text>
          <Text style={{fontSize: 18}}>Copy</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        
        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>NPWP</Text>
          <Text style={{fontSize: 18}}>12332xxx</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>

        <View style={{marginLeft: 10,  flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginRight: 20}}>
          <Text style={{fontSize: 15}}>KTP Number</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 18, marginRight: 20}}>I3434</Text>
          <Text style={{fontSize: 18}}>29 Juni 1999</Text>
          </View>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>

        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>KTP Address</Text>
          <Text style={{fontSize: 18}}>Jalan Baciro</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>

        <View style={{marginLeft: 10, marginTop: 15,marginRight: 20, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15}}>Resedrntial Address</Text>
          <Text style={{fontSize: 18}}>Jalan Baciro</Text>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
       </View> 




       <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}> 
        <View style={{flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginRight: 20}}>
        <View style={{marginLeft: 10, marginTop: 15,}}>
          <Text style={{fontSize: 15}}>Edicational</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <Text style={{fontSize: 18, marginRight: 20}}>S1</Text>
          <Text style={{fontSize: 18}}>Sistem infromatika</Text>
          </View>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
        <View style={{flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginRight: 20}}>
        <View style={{marginLeft: 10, marginTop: 15,}}>
          <Text style={{fontSize: 15}}>Certifacate</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <Text style={{fontSize: 18, marginRight: 20}}>S1 ITB</Text>
          <Text style={{fontSize: 18}}>29 Juni 1999</Text>
          </View>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4, marginBottom: 20}}/>
        <View style={{flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginRight: 20}}>
        <View style={{marginLeft: 10, marginTop: 15,}}>
          <Text style={{fontSize: 15}}>Bank Account</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <Text style={{fontSize: 18, marginRight: 20}}>BNI</Text>
          <Text style={{fontSize: 18}}>9908980xxx</Text>
          </View>
        </View>
        <View style={{marginLeft:10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4}}/>
       </View> 

       <TouchableOpacity 
          style={{marginHorizontal: 10, paddingTop:10, paddingBottom:20,  backgroundColor: 'white', marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#6495ED'}}>Edit Pofile</Text>

        </TouchableOpacity>


  




       </ScrollView>

        
         {/* Navigation bar*/}


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



	
	
	
