
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
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import AsyncStorage from '@react-native-community/async-storage';
import { Input, TextLink, Loading, Button } from '../components/common';
import AwesomeAlert from 'react-native-awesome-alerts';

const BASEURL = 'https://d9d9abd8.ngrok.io'

export default class Cuti extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)
    this.state = {
      mulai_cuti: "2019-09-10",
      selesai_cuti: "2019-09-11",
      keperluan: "",
      tugas_selesai1: "",
      tugas_selesai2: "",
      tugas_berjalan1: "",
      tugas_berjalan2: "",
      tugas_berjalan3: "",
      alih_tangan: "",
      tugas_alihan1: "",
      tugas_alihan2: "",
      tipe_cuti: ""
    };
  }



  PostCuti = async () => {
    const { mulai_cuti, selesai_cuti, keperluan, tugas_selesai1, tugas_selesai2, tugas_berjalan1,
      tugas_berjalan2, tugas_berjalan3,alih_tangan, tugas_alihan1, tugas_alihan2, tipe_cuti } = this.state;


    // NOTE Post to HTTPS only in production
    const id = await AsyncStorage.getItem('user');
    const url = `${BASEURL}/api/pengguna/${id}/cuti?access_token=` + await AsyncStorage.getItem('auth');
    axios.post(url, {
      mulai_cuti: mulai_cuti,
      selesai_cuti: selesai_cuti,
      keperluan: keperluan,
      tugas_selesai1: tugas_selesai1,
      tugas_selesai2: tugas_selesai2,
      tugas_berjalan1: tugas_berjalan1,
      tugas_berjalan2: tugas_berjalan2,
      tugas_berjalan3: tugas_berjalan3,
      alih_tangan: alih_tangan,
      tugas_alihan1: tugas_alihan1,
      tugas_alihan2: tugas_alihan2,
      tipe_cuti: tipe_cuti
    })
      .then((response) => {
        //handle success
        console.log({ response });
        alert('submit success')
      })
      .catch(function (error) {
        //handle error
        console.log({ error });
        alert('submit error')
      })
      .done();
  }




  render() {
    const { mulai_cuti, selesai_cuti, keperluan, tugas_selesai1, tugas_selesai2, tugas_berjalan1,
      tugas_berjalan2, tugas_berjalan3,alih_tangan, tugas_alihan1, tugas_alihan2, tipe_cuti } = this.state;
    const {  loading } = this.state;
    

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column' }}>

          <View style={{ height: 40, backgroundColor: '#48D1CC', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} >Cuti</Text>
          </View>

          <View style={{ paddingTop: 10, paddingBottom: 10, BackgroundColor: 'Blue', marginTop: 5, flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, marginTop: 10 }}>Tanggal Cuti</Text>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 2 }}>
            <View style={{ flexDirection: 'column' }}>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.mulai_cuti}
                mode="date"
                placeholder="start date"
                placeholderTextColor="black"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2020-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    marginLeft: 20,
                    borderColor: 'red',
                    backgroundColor: 'white'

                  }
                }}
                value={mulai_cuti}
                onDateChange={(mulai_cuti) => { this.setState({ mulai_cuti }) }}
              />

              <DatePicker
                style={{ width: 200, marginTop: 10 }}
                date={this.state.selesai_cuti}
                mode="date"
                placeholder="end date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2020-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    marginLeft: 20,
                    borderColor: 'red',
                    backgroundColor: 'white'
                  }
                }}
                value={selesai_cuti}
                onDateChange={(selesai_cuti) => { this.setState({ selesai_cuti }) }}
              />
            </View>
   
     </View>
          </View>

          <View style={{ paddingTop: 10, paddingBottom: 10, BackgroundColor: 'Blue', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, alignItems: 'center' }}>
            <Text style={{ fontSize: 15 }} > Keperluan Cuti</Text>

            <TextInput
              style={{ height: 50, width: 100, borderColor: 'red', borderWidth: 1, paddingRight: 2, marginLeft: 20, flex: 1, backgroundColor: 'white', borderRadius: 5 }}
              value={keperluan}
              onChangeText={keperluan => this.setState({ keperluan })}
            />
          </View>

          <View style={{ marginTop: 15, marginHorizontal: 16, flexDirection: 'column' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Project Progress</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 15 }}>Pekerjaan Selesai</Text>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 2 }}>
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_selesai1}
                  onChangeText={tugas_selesai1 => this.setState({ tugas_selesai1 })} />
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_selesai2}
                  onChangeText={tugas_selesai2 => this.setState({ tugas_selesai2 })} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 15 }}>Pekerjaan OnProgress</Text>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 2 }}>
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'red', borderWidth: 1, paddingRight: 3, marginLeft: 20, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_berjalan1}
                  onChangeText={tugas_berjalan1 => this.setState({ tugas_berjalan1 })} />
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_berjalan2}
                  onChangeText={tugas_berjalan2 => this.setState({ tugas_berjalan2 })} />
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_berjalan3}
                  onChangeText={tugas_berjalan3 => this.setState({ tugas_berjalan3 })} />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 15, marginHorizontal: 16, flexDirection: 'column' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Handover Document</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>Nama</Text>
              <View style={{ backgroundColor: 'white', width: 120, right: 50 }}>
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'red', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5, backgroundColor: 'white', borderRadius: 5 }}
                  value={alih_tangan}
                  onChangeText={alih_tangan => this.setState({ alih_tangan })} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 15 }}>Pekerjaan Diberikan</Text>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 2 }}>
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'red', borderWidth: 1, paddingRight: 3, marginLeft: 20, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_alihan1}
                  onChangeText={tugas_alihan1 => this.setState({ tugas_alihan1 })} />
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_alihan2}
                  onChangeText={tugas_alihan2 => this.setState({ tugas_alihan2 })} />
              </View>
            </View>
            <View style={{ marginBottom: 10 ,flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 15 }}>Tipe Cuti</Text>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 2 }}>
                <TextInput
                  style={{ height: 50, width: 150, borderColor: 'red', borderWidth: 1, paddingRight: 3, marginLeft: 20, backgroundColor: 'white', borderRadius: 5 }}
                  placeholder="reg-first / bonus-first"
                  value={tipe_cuti}
                  onChangeText={tipe_cuti => this.setState({ tipe_cuti })} />
              </View>
            </View>
          </View>
              

          {!loading ?
                    <Button   
                    onPress={this.PostCuti}>
                    Submit
                    </Button>
                  
                    :
                    <Loading size={'large'}/>
                    }
              
        </ScrollView>
      </View>
    )
  }
}





