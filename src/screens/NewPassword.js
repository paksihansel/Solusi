import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    TextInput,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { Input, TextLink, Loading, Button } from '../components/common';
import AsyncStorage from '@react-native-community/async-storage';

const BASEURL = 'https://d9d9abd8.ngrok.io'

export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }
 
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            newPassword: 'testerA1!',
            confirmPassword:'testerA1!',
            error: '',
            loading: false,            
        };

        this.loginUser = this.loginUser.bind(this);
    }

    storeToken(responseData){
        AsyncStorage.setItem('auth', data.id ); 
        AsyncStorage.setItem('user', data.userId);
        };
  

   loginUser = async() => {
        const { token, newPassword, confirmPassword  } = this.state;
        this.setState({ error: '', loading: true });

        const url = `${BASEURL}/api/pengguna/reset-password?access_token=`+this.state.token;
        axios.post(url, {
            newPassword: newPassword
        })
            .then((response) => {
                if (this.state.newPassword != this.state.confirmPassword) {
                    alert('Password tidak cocok')
                    console.log(response)
                    }else{
                        this.props.navigation.navigate('Auth');
                    }
            })
    }


   

    render() {
        const { token, newPassword ,confirmPassword, error, loading } = this.state;
        const { form, section, errorTextStyle } = styles;

        return (
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image style={{ width: 150, height: 200 }}
                        source={require('../menu/reset2.jpg')} />
                </View>
               
                <View style={styles.containerForm}>

                <Text style={errorTextStyle}>
                        {error}
                    </Text>

                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Token"
                        placeholderTextColor="green"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        label="Email"
                        value={token}
                        onChangeText={token => this.setState({ token })}
                    /*onSubmitEditing={() => this.password.focus()}*/
                    />

                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="green"
                        label="Password"
                        value={newPassword}
                        onChangeText={newPassword => this.setState({ newPassword })}
                    /*ref={(input) => this.password = input}*/
                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="green"
                        label="Password"
                        value={confirmPassword}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })}
                    /*ref={(input) => this.password = input}*/
                    />


                    {!loading ?
                    <Button onPress={this.loginUser}>
                    Submit
                    </Button>
                    :
                    <Loading size={'large'}/>
                    }
                    

                </View>

            </View>
        )
    }
}



const styles = {
    container: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },

    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },

    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    containerLogo: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    containerForm: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox: {
        width: 300,
        backgroundColor: 'azure',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 10
    },

    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    form: {
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    section: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    }

};
