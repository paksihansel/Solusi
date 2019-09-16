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
  Modal,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

import * as Progress from 'react-native-progress';
import { Fonts } from './tabscreen/fonts';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component{
  static navigationOptions = {
    header: null,
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
    return(
      <View style={{flex: 1}}>
        {/*Searchbar*/}
  
        
        <View style={{height: 220, width: '100%', backgroundColor: '#48D1CC'}}>
          <Image style={{height: 100, width:200, marginLeft: 20}} source = {require('../icon/logo.png')}/>
          <Text style={{marginLeft: 20, fontSize: 30, marginTop: 5, color: 'whitesmoke', fontFamily: 'Satisfy-Regular'}}>Hai Dewi</Text>
          <Text style={{marginLeft: 20, fontSize: 20, marginTop: 5, color: 'whitesmoke'}}>{time}</Text>
        </View>


        <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA'}}>

        {/* Pengajuan */}

        <View style={{paddingLeft: 20, marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Saya Ingin Mengajukan....</Text>
        </View>
        
        <View style={styles.containerfitur}>

          <View style={styles.containersub}>
            <TouchableOpacity style={styles.fiturbox} onPress={() =>this.props.navigation.navigate('Cuti')} >
              <Image style={{width: 25, height: 25}} source = {require('../menu/cuti-kalender.png')}/>
              <Text style={styles.textnav}>Cuti</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiturbox} >
              <Image style={{width: 25, height: 25}} source = {require('../menu/resign.png')}/>
              <Text style={styles.textnav}>resign</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiturbox} onPress={() =>this.props.navigation.navigate('Peminjaman')}>
              <Image style={{width: 25, height: 25}} source = {require('../menu/peminjaman-kardus.png')}/>
              <Text style={styles.textnav}>peminjaman</Text>
            </TouchableOpacity>
          </View>


        </View>


        {/* Lainnya */}

        <View style={{paddingLeft: 20, marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Data Diri....</Text>
        </View>
        
        <View style={styles.containerfitur}>

          <View style={styles.containersub}>
          <TouchableOpacity style={styles.fiturbox} onPress={() =>this.props.navigation.navigate('Task')} >
              <Image style={{width: 25, height: 25}} source = {require('../menu/task-centang.png')}/>
              <Text style={styles.textnav}>Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiturbox}>
              <Image style={{width: 26, height: 26}} source = {require('../menu/cuti-mikroskop.png')}/>
              <Text style={styles.textnav}>Data presensi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiturbox}>
              <Image style={{width: 26, height: 26}} source = {require('../menu/presensi-grafik.png')}/>
              <Text style={styles.textnav}>Data Cuti</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containersub}>
            <TouchableOpacity style={styles.fiturbox}onPress={() =>this.props.navigation.navigate('TimSaya')}>
              <Image style={{width: 40, height: 26}} source = {require('../menu/tim-saya.png')}/>
              <Text style={styles.textnav}>Tim Saya</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 85, height: 85, borderWidth: 1, borderColor: '#E6E6E6', backgroundColor: 'white', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}} onPress={() =>this.props.navigation.navigate('News')}>
              <Image style={{width: 26, height: 26}} source = {require('../menu/news-koran.png')}/>
              <Text style={styles.textnav}>Berita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 85, height: 85, borderWidth: 1, borderColor: '#E6E6E6', backgroundColor: 'white', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}} onPress={() =>this.props.navigation.navigate('News')}
            onPress={() => { this.setModalVisible(true);
            }}>
            <Icon name="ellipsis-h" size={30} color="grey" />
              <Text style={styles.textnav}>Lainnya</Text>
            </TouchableOpacity>

            <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, backgroundColor: 'whitesmoke', height: 500, top: 200, borderTopStartRadius: 20, borderTopEndRadius: 20, borderTopColor: 'black'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10}}>
              <Text style={{fontSize: 18, fontFamily: 'Satisfy-Regular'}}>Fitur Lainnya....</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={{height: 40, width: 80,backgroundColor: '#48D1CC', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                <Text>closed</Text>
                
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 50, marginHorizontal: 10}}>
                <TouchableOpacity style={{width: 85, height: 85, borderWidth: 1, borderColor: '#E6E6E6', backgroundColor: 'white', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}} onPress={() =>this.props.navigation.navigate('News')}>
            <Icon name="ellipsis-h" size={30} color="grey" />
              <Text style={{fontWeight: 'bold'}}>Lainnya</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>







          </View>

          

        </View>
    


        </ScrollView>

         {/* Navigation bar*/}

         <View style={{height: 50,  flexDirection: 'row'}}>

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Home')}>
  <Image style={{width: 22, height: 22}} source = {require('../menu/button-home.png')}/>
  <Text style={styles.textnav}>Home</Text>
</TouchableOpacity>          

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Inbox')}>
  <Image style={{width: 22, height: 22}} source = {require('../menu/inbox-abu.png')}/>
  <Text style={styles.textnav}>inbox</Text> 
</TouchableOpacity>

<TouchableOpacity style={styles.Containernav} onPress={() =>this.props.navigation.navigate('Profile')}>
<Icon name="user-circle" size={25} color="grey" />
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
    width: 85,
    height: 85,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: 'white',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  }
});



	
	
	
