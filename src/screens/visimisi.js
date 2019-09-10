
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
import Icon from 'react-native-vector-icons/FontAwesome';



export default class Profile extends Component{

  static navigationOptions = {
    header: null,
  }

  render(){
    return(
      <View style={{flex: 1}}>
       <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
       <View style={{height: 40, backgroundColor: '#48D1CC', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 18, color: 'white', fontFamily: 'SF-Compact-Text-Regular'}}>Visi Misi</Text>
          </View>
       <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 15}}
        onPress={() => this.props.navigation.navigate('InfoAkun')}>
         <View style={{flexDirection: 'column', marginRight: 20}}>
          <Text style={{fontSize: 18}}>Visi Misi</Text>
          <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Icon name="circle" size={20} color="grey" />
          <Text style={{fontSize: 18, marginLeft: 20,color: 'grey'}}>To become 'High End' dan Middle End' Information Technology Consultant, 
          Outsource Solution and Operational Support Provider, that proven guarantee the 'Customer Success'</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Icon name="circle" size={20} color="grey" />
          <Text style={{fontSize: 18, marginLeft: 20,color: 'grey'}}>To become Business Partner which win for bothside and always ' Easy to do Business with'</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Icon name="circle" size={20} color="grey" />
          <Text style={{fontSize: 18, marginLeft: 20,color: 'grey'}}>To become 'One of the Best Information Technology Company' in Indonesia.</Text>
          </View>
          </View>
        </TouchableOpacity>
        
       </View> 

       </ScrollView>
  </View>
    )
  }
}


	
	
	
