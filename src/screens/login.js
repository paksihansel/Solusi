import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

StatusBar ,

TouchableOpacity,

Image,

TextInput

} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';








export default class Login extends Component{

    static navigationOptions = {
        header: null,
      }




render() {

return(

<View style={styles.container}>

<View style={styles.containerLogo}>

    <Image  style={{width:150, height: 200}}

    source={require('../menu/masuk.png')}/>

    </View>

    <View style={styles.containerForm}>


<TextInput style={styles.inputBox}

underlineColorAndroid='rgba(0,0,0,0)'

placeholder="Email"

placeholderTextColor = "green"

selectionColor="#fff"

keyboardType="email-address"

onSubmitEditing={()=> this.password.focus()}

/>

<TextInput style={styles.inputBox}

underlineColorAndroid='rgba(0,0,0,0)'

placeholder="Password"

secureTextEntry={true}

placeholderTextColor = "green"

ref={(input) => this.password = input}

/>

<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>

<Text style={styles.buttonText}>Login</Text>

</TouchableOpacity>

</View>

<View style={styles.signupTextCont}>

<Text style={styles.signupText}>Dont have an account yet?</Text>


</View>

</View>

)

}

}



const styles = StyleSheet.create({

container : {

backgroundColor:'#FAFAFA',

flex: 1,

alignItems:'center',

justifyContent :'center'

},

signupTextCont : {

flexGrow: 1,

alignItems:'flex-end',

justifyContent :'center',

paddingVertical:16,

flexDirection:'row'

},

signupText: {

color:'rgba(255,255,255,0.6)',

fontSize:16

},

signupButton: {

color:'#ffffff',

fontSize:16,

fontWeight:'500'

},
containerLogo : {

    flexGrow: 1,

    justifyContent:'flex-end',

    alignItems: 'center'

    },

    logoText : {

    marginVertical: 15,

    fontSize:18,

    color:'rgba(255, 255, 255, 0.7)'

    },
    containerForm : {

        flexGrow: 1,
        
        justifyContent:'center',
        
        alignItems: 'center'
        
        },
        
        
        
        inputBox: {
        
        width:300,
        
        backgroundColor:'azure',
        
        borderRadius: 25,
        
        paddingHorizontal:16,
        
        fontSize:16,
        
        color:'black',
        
        marginVertical: 10
        
        },
        
        button: {
        
        width:300,
        
        backgroundColor:'#1c313a',
        
        borderRadius: 25,
        
        marginVertical: 10,
        
        paddingVertical: 13
        
        },
        
        buttonText: {
        
        fontSize:16,
        
        fontWeight:'500',
        
        color:'#ffffff',
        
        textAlign:'center'
        
        }


});