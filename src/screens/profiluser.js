/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { thisExpression } from '@babel/types';
import { Item } from 'native-base';

const BASEURL = 'https://d9d9abd8.ngrok.io'


export default class ProfileUser extends Component {

  static navigationOptions = {
    header: null,
  }
  state = {
    data: []
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

  render() {

    return (

      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
          <View style={{ height: 50, backgroundColor: '#48D1CC', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: 'white', fontFamily: Fonts.Varella }}>Profile User</Text>
            </View>
          </View>


          <View style={{ paddingTop: 10, paddingBottom: 20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column' }}>
            <View style={{ marginBottom: 5, marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>Sex</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.jenis_kelamin}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginBottom: 5, marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>Date of Birth</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.tgl_lahir}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginBottom: 5, marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>Blood Type</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.golongan_darah}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>Religion</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.agama}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginBottom: 5, marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>Email</Text>
              <Text>{this.state.data.email}</Text>
        </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginBottom: 5, marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>Phone</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.no_telepon}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
          </View>




          <View style={{ paddingTop: 10, paddingBottom: 20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column' }}>
            <View style={{ marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>KK</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.kk}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>KTP</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.ktp}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>NPWP</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.npwp}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginLeft: 10, flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginRight: 20 }}>
              <Text style={{ fontSize: 15 }}>KTP Number</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, marginRight: 20 }}>{this.state.data.no_ktp}</Text>
                <Text style={{ fontSize: 18 }}>{this.state.data.masa_berlaku}</Text>
              </View>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>KTP Address</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.alamat_ktp}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />

            <View style={{ marginLeft: 10, marginTop: 15, marginRight: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 15 }}>Resedrntial Address</Text>
              <Text style={{ fontSize: 18 }}>{this.state.data.alamat}</Text>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
          </View>




          <View style={{ paddingTop: 10, paddingBottom: 20, marginTop: 10, marginHorizontal: 10, backgroundColor: 'white', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginRight: 20 }}>
              <View style={{ marginLeft: 10, marginTop: 15, }}>
                <Text style={{ fontSize: 15 }}>Edicational</Text>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Text style={{ fontSize: 18, marginRight: 20 }}>{this.state.data.gelar}</Text>
                <Text style={{ fontSize: 18 }}>{this.state.data.jurusan}</Text>
              </View>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginRight: 20 }}>
              <View style={{ marginLeft: 10, marginTop: 15, }}>
                <Text style={{ fontSize: 15 }}>Certifacate</Text>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Text style={{ fontSize: 18, marginRight: 20 }}>{this.state.data.ijazah}</Text>
                <Text style={{ fontSize: 18 }}>{this.state.data.tgl_pengesahan}</Text>
              </View>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4, marginBottom: 20 }} />
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, marginRight: 20 }}>
              <View style={{ marginLeft: 10, marginTop: 15, }}>
                <Text style={{ fontSize: 15 }}>Bank Account</Text>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Text style={{ fontSize: 18, marginRight: 20 }}>{this.state.data.bank}</Text>
                <Text style={{ fontSize: 18 }}>{this.state.data.no_rekening}</Text>
              </View>
            </View>
            <View style={{ marginLeft: 10, borderBottomColor: 'grey', borderBottomWidth: 1, marginRight: 20, marginTop: 4 }} />
          </View>

          <TouchableOpacity
            style={{ marginHorizontal: 10, paddingTop: 10, paddingBottom: 20, backgroundColor: 'white', marginTop: 10, marginBottom: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: '#6495ED' }}>Edit Pofile</Text>

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
  ImageStyle: {
    width: 26,
    height: 26
  },
  Containernav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

});






