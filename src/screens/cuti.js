
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
  KeyboardAvoidingView,
} from 'react-native';

import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';

export default class Cuti extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)
    this.state = {
      mulai_cuti: "",
      selesai_cuti: "",
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


  PostCuti() {
    const { mulai_cuti, selesai_cuti ,keperluan ,tugas_selesai1, tugas_selesai2, tugas_berjalan1,
      tugas_berjalan2, tugas_berjalan3,  tugas_alihan1, tugas_alihan2, tipe_cuti } = this.state;

    // NOTE Post to HTTPS only in production
    axios.post("https://19ef5b98.ngrok.io/api/pengguna/login", {
    mulai_cuti: mulai_cuti,
    selesai_cuti: selesai_cuti,
    keperluan: keperluan,
    tugas_selesai1: tugas_selesai1,
    tugas_selesai2: tugas_selesai2,
    tugas_berjalan1: tugas_berjalan1,
    tugas_berjalan2: tugas_berjalan2,
    tugas_berjalan3: tugas_berjalan3,
    tugas_alihan1: tugas_alihan1,
    tugas_alihan2: tugas_alihan2,
    tipe_cuti: tipe_cuti  
    })
    .then(function (response) {
      //handle success
      console.log({response});
      })
      .catch(function (error) {
        //handle error
        console.log({error});
      })
      .done();
  }




  render() {
    const { mulai_cuti, selesai_cuti, keperluan, tugas_selesai1, tugas_selesai2, tugas_berjalan1,
      tugas_berjalan2, tugas_berjalan3, tugas_alihan1, tugas_alihan2, tipe_cuti } = this.state;



    var alih_tangan = [{
      value: 'rafli',
    }, {
      value: 'Salma',
    }, {
      value: 'Tutur',
    }, {
      value: 'Baid',
    }, {
      value: 'Ilham',
    }];
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column' }}>

          <View style={{ height: 40, backgroundColor: '#48D1CC', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} >Cuti</Text>
          </View>

          <View style={{ paddingTop: 10, paddingBottom: 10, BackgroundColor: 'Blue', marginTop: 5, flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 15 }}> Tanggal Cuti</Text>
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
                    borderColor: 'black',
                    backgroundColor: 'white'

                  }
                }}
                onDateChange={(mulai_cuti) => { this.setState({ mulai_cuti: mulai_cuti }) }}
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
                    backgroundColor: 'white'
                  }
                }}
                onDateChange={(selesai_cuti) => { this.setState({ selesai_cuti: selesai_cuti }) }}
              />
            </View>
          </View>

          <View style={{ paddingTop: 10, paddingBottom: 10, BackgroundColor: 'Blue', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
            <Text style={{ fontSize: 15 }} > Keperluan Cuti</Text>

            <TextInput
              style={{ height: 50, width: 100, borderColor: 'gray', borderWidth: 1, paddingRight: 2, marginLeft: 20, flex: 1, backgroundColor: 'white', borderRadius: 5 }}
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
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_berjalan1}
                  onChangeText={tugas_berjalan2 => this.setState({ tugas_berjalan1 })} />
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_berjalan2}
                  onChangeText={tugas_berjalan2 => this.setState({ tugas_berjalan2 })} />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 15, marginHorizontal: 16, flexDirection: 'column' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Handover Document</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>Nama</Text>
              <View style={{ backgroundColor: 'white', width: 120, right: 50 }}>
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_alihan2}
                  onChangeText={tugas_alihan2 => this.setState({ tugas_alihan2 })} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 15 }}>Pekerjaan Diberikan</Text>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 2 }}>
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_alihan1}
                  onChangeText={tugas_alihan1 => this.setState({ tugas_alihan1 })} />
                <TextInput
                  style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5, backgroundColor: 'white', borderRadius: 5 }}
                  value={tugas_alihan2}
                  onChangeText={tugas_alihan2 => this.setState({ tugas_alihan2 })} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 15 }}>Tipe Cuti</Text>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 2 }}>
                <TextInput
                  style={{ height: 50, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, backgroundColor: 'white', borderRadius: 5 }}
                  placeholder="reg-first atau bonus-first"
                  value={tipe_cuti}
                  onChangeText={tipe_cuti => this.setState({ tipe_cuti })} />
              </View>
            </View>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, marginBottom: 30 }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#6495ED', marginTop: 30, width: 100, height: 40, borderRadius: 5 }}
              onPress={() => alert('Submit Form Sucsees')}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Submit</Text>
            </TouchableOpacity>
          </View>








        </ScrollView>
      </View>
    )
  }
}





