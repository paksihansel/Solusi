
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

import DatePicker from 'react-native-datepicker';


export default class Cuti extends Component{
  static navigationOptions = {
    header: null,
  }
  constructor(props){
    super(props)
    this.state = {date:""}
  }


  render(){
    return(
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#FAFAFA', flexDirection: 'column'}}>

        <View style={{height: 40, backgroundColor: '#48D1CC', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}} >Cuti</Text>
        </View>

                <View style={{paddingTop: 10, paddingBottom: 10, BackgroundColor: 'Blue', marginTop: 5, flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 15}}> Tanggal Cuti</Text>
						<View style={{flexDirection: 'column'}}>
          <DatePicker
                  style={{width: 200}}
                  date={this.state.date}
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
                  onDateChange={(date) => {this.setState({date: date})}}
                />

         <DatePicker
                  style={{width: 200, marginTop: 10}}
                  date={this.state.date}
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
                  onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>
                </View>

        <View style={{paddingTop: 10, paddingBottom: 10, BackgroundColor: 'Blue', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16}}>
            <Text style={{fontSize: 15}} > Keperluan Cuti</Text>

            <TextInput
               style={{height: 50, width: 100, borderColor: 'gray', borderWidth: 1, paddingRight: 2, marginLeft: 20, flex: 1,  backgroundColor: 'white', borderRadius: 5}}
              />
        </View>

        <View style={{marginTop: 15, marginHorizontal: 16, flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Project Progress</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <Text style={{fontSize: 15}}>Pekerjaan Selesai</Text>
            <View style={{flexDirection: 'column', justifyContent: 'space-between', marginTop: 2}}>
                  <TextInput
                    style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, backgroundColor: 'white', borderRadius: 5}}
                      />
                  <TextInput
                    style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5,  backgroundColor: 'white', borderRadius: 5}}
                      />
            </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 15}}>Pekerjaan OnProgress</Text>
                        <View style={{flexDirection: 'column', justifyContent: 'space-between', marginTop: 2}}>
                              <TextInput
                                style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20,  backgroundColor: 'white', borderRadius: 5}}
                                  />
                              <TextInput
                                style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5,  backgroundColor: 'white', borderRadius: 5}}
                                  />
                        </View>
                        </View>
        </View>
        <View style={{marginTop: 15, marginHorizontal: 16, flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Handover Document</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <Text style={{fontSize: 15}}>Nama</Text>
            <View style={{flexDirection: 'column', justifyContent: 'space-between', marginTop: 2}}>
                  <TextInput
                    style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20,  backgroundColor: 'white', borderRadius: 5}}
                      />
            </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 15}}>Pekerjaan Diberikan</Text>
                        <View style={{flexDirection: 'column', justifyContent: 'space-between', marginTop: 2}}>
                              <TextInput
                                style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20,  backgroundColor: 'white', borderRadius: 5}}
                                  />
                              <TextInput
                                style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1, paddingRight: 3, marginLeft: 20, marginTop: 5,  backgroundColor: 'white', borderRadius: 5}}
                                  />
                        </View>
                        </View>
        </View>

            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, marginBottom: 30}}>
            <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', backgroundColor: '#6495ED', marginTop: 30, width: 100, height: 40, borderRadius: 5}}
            onPress={() => alert('Submit Form Sucsees')}
            >
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Submit</Text>
            </TouchableOpacity>
          </View>






        </ScrollView>
      </View>
    )
  }
}





