
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
            <Text style={{fontSize: 18, color: 'white', fontFamily: 'SF-Compact-Text-Regular'}}>About</Text>
          </View>
       <View style={{paddingTop:10, paddingBottom:20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column'}}>
        <View style={{marginLeft: 10, marginTop: 15}}>
         <View style={{flexDirection: 'column', marginRight: 20}}>
          <Text style={{fontSize: 18}}>About</Text>
          <View style={{flexDirection: 'column', marginTop: 10, alignItems: 'center'}}>
          <Text style={{fontSize: 18, marginLeft: 20, color: 'grey'}}>	

SOLUSI247 is an ICT company established in 2000, and is focused on large scale data processing, relational database management systems (RDBMS), and massive parallel flat file processing. Because the exponentially growing amount of data available presents some significant challenges, we adopt Hadoop, the cutting edge Big Data platform. With the support of certified specialists, we are able to create highly productive and easy-to-use tools and applications for MapReduce. One of those tools is called HGrid247, a tool that enables automatic code-generation and real-time processing. Our products and services have consistently ensured our customers’ satisfaction, which can be proven by the fact that we have implemented Hadoop clusters involving ± 200 nodes for telecommunication firms across Indonesia.
</Text>
<Text style={{fontSize: 18, marginLeft: 20,marginTop: 5, color: 'grey'}}>	
Our aim is to consistently create products of superior value. Since we always aim for the highest standard, our brand name and logo consist of three characteristics that remind us of that idea. Firstly, the blue color of the sky represents our desire to maintain the highest of standards. The green color represents the opportunities that our earth provides, which we are keen to take using our technical expertise and experience. Finally, SOLUSI247 refers to our aim to continuously find new ways to innovate and build new solutions for our partners..
</Text>
<Text style={{fontSize: 18, marginLeft: 20,marginTop: 5, color: 'grey'}}>	
Our main target markets are fixed and mobile operators, large enterprises and government organizations. Our current customer base comprises over eight large organizations across these sectors. We are currently looking to expand our operations beyond Indonesia, by targeting large telecommunication firms in South-East Asia. Our experiences have made us experts in leveraging Big Data in the telecommunication industry, but we are looking to expand our operations to other sectors in the near future.
</Text>
<Text style={{fontSize: 18, marginLeft: 20,marginTop: 5, color: 'grey'}}>	
SOLUSI247 continues to grow rapidly year after year. Our 16 years of experience in managing Big Data projects in the telecom industry have made SOLUSI247 a recognized and trusted specialist firm in Indonesia. Together with our partners and customers, we have made many investments to engineer solutions and execute projects, that all together have led to positive results. This has strengthened the cooperation between ourselves and our partners.
</Text>
<Text style={{fontSize: 18, marginLeft: 20,marginTop: 5, color: 'grey'}}>
Based on our lengthy experience, we find that technological investment and suitable implementation are the two main pillars that support our business. We profoundly believe that a technological investment by itself does not guarantee business success, but instead requires significant effort in the implementation process. We do not only specialize in developing the technology, but we commit ourselves into delivering the best tailored solution for each individual partner.
</Text>
<Text style={{fontSize: 18, marginLeft: 20,marginTop: 5, color: 'grey'}}>
Looking ahead, we strive to continue learning and further develop the competences and skills of our teams. We wish to incorporate our partner’s input to improve productivity, internal processes, and best practice standards. We keep moving forward by creating added value to all our customers, partners, staff and IT development team.
</Text>

          </View>
          </View>
        </View>
        
       </View> 

       </ScrollView>
  </View>
    )
  }
}


	
	
	
