/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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
  alertMessage,
} from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { Fonts } from './tabscreen/fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const BASEURL = 'https://d9d9abd8.ngrok.io'


export default class Profile extends Component {

  static navigationOptions = {
    header: null,
  }


  constructor(props) {
    super(props);

    this.state = {
      isLoggenIn: "",
      showProgress: false,
      data:[]
    }
  }
  logout = async () => {
    try {
      const url = `${BASEURL}/api/pengguna/logout?access_token=`+await AsyncStorage.getItem('auth');
      axios.post(url)
      .then((response) => {
      AsyncStorage.removeItem('auth')
      console.log('berhasil')
      this.props.navigation.navigate('AuthLoading');
    })
    } catch (error) {
      console.log("Something went wrong");
    }

  }

  componentDidMount = async() => {
    const id = await AsyncStorage.getItem('user');
    const urlp = `${BASEURL}/api/pengguna/${id}/profil?access_token=` + await AsyncStorage.getItem('auth');
    axios.get(urlp, {
    })
      .then((response) => {
        //handle success
        const data = response.data;
        console.log({ response });
        this.setState({ data })
      })
      .catch(function (error) {
        //handle error
        console.log({ error });
      })
      .done();
  
    }


  onLogoutFail() {
    this.setState({
      error: 'loogout Failed',
      loading: false
    });
  }




  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
          <View style={{ height: 40, backgroundColor: '#48D1CC', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: 'white', fontFamily: 'SF-Compact-Text-Regular' }}>Pofile</Text>
          </View>

          <View style={{ paddingTop: 30, paddingBottom: 20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../icon/Dewi.jpg')} style={{ width: 100, height: 100, borderRadius: 100 / 2, borderWidth: 3, borderColor: 'black' }} />
            <Text style={{ fontSize: 15 }}>{this.state.data.nama}</Text>
            <Text style={{ fontSize: 15 }}>{this.state.data.tim}</Text>
          </View>

          <View style={{ paddingTop: 10, paddingBottom: 20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column' }}>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'VarelaRound-Regular' }}>Detail Profile</Text>
            </View>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}
              onPress={() => this.props.navigation.navigate('ProfileUser')} >
              <Text style={{ fontSize: 18, fontFamily: Fonts.Varella }}>Profile User</Text>
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}>
              <Text style={{ fontSize: 18 }}>Data Keluarga</Text>
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}>
              <Text style={{ fontSize: 18 }}>Data Perusahaan</Text>
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 10, paddingBottom: 20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column' }}>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lainnya</Text>
            </View>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}
              onPress={() => this.props.navigation.navigate('VisiMisi')}>
              <Text style={{ fontSize: 18 }}>Visi dan Misi</Text>
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}
              onPress={() => this.props.navigation.navigate('About')}>
              <Text style={{ fontSize: 18 }}>About</Text>
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}
              onPress={() => this.props.navigation.navigate('Setting')}>
              <Text style={{ fontSize: 18 }}>Setting</Text>
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
            </TouchableOpacity>
          </View>


          <TouchableOpacity
            style={{ marginHorizontal: 10, paddingTop: 10, paddingBottom: 20, backgroundColor: 'white', marginTop: 10, marginBottom: 10 }}
            onPress={this.logout.bind(this)}
          >

            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Text style={{ fontSize: 18 }}>Logout</Text>
            </View>
          </TouchableOpacity>





        </ScrollView>


        {/* Navigation bar*/}

        <View style={{ height: 50, flexDirection: 'row' }}>

          <TouchableOpacity style={styles.Containernav} onPress={() => this.props.navigation.navigate('Home')}>
            <Image style={{ width: 22, height: 22 }} source={require('../menu/home-abu.png')} />
            <Text style={styles.textnav}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Containernav} onPress={() => this.props.navigation.navigate('Inbox')}>
            <Image style={{ width: 22, height: 22 }} source={require('../menu/inbox-abu.png')} />
            <Text style={styles.textnav}>inbox</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Containernav} onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="user-circle" size={25} color="#48D1CC" />
            <Text style={styles.textnav}>account</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({

  Containernav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textnav: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4
  }
});





