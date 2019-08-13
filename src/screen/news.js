import React, { Component } from 'react'
import { View, StyleSheet, Image, Text }

from 'react-native'
import {WebView} from 'react-native-webview'
const WebViewExample = () => {
   return (
      <View style = {styles.container}>
        <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://www.detik.com/' }}
         />
        </View>
        <View style={{height: 56,  flexDirection: 'row'}}>

    <View style={styles.Containernav}>
        <Image style={{width: 26, height: 26}} source = {require('../icon/home.png')}/>
        <Text style={styles.textnav}>Home</Text>
    </View>          
  
    <View style={styles.Containernav}>
        <Image style={{width: 26, height: 26}} source = {require('../icon/help-active.png')}/>
        <Text style={styles.textnav}>help</Text> 
    </View>
  
    <View style={styles.Containernav}>
        <Image style={{width: 26, height: 26}} source = {require('../icon/inbox.png')}/>
        <Text style={styles.textnav}>inbox</Text> 
    </View>

    <View style={styles.Containernav}>
        <Image style={{width: 26, height: 26}} source = {require('../icon/account.png')}/> 
        <Text style={styles.textnav}>account</Text> 
    </View>
    </View>
      
      
      
      
      
      
      
      
      </View>

      
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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


