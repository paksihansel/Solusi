import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import axios from 'axios';
import { Input, TextLink, Loading, Button } from '../components/common';

const BASEURL = 'https://d9d9abd8.ngrok.io'

export default class Forgot extends Component {

    static navigationOptions = {
        header: null,
    }
 
    constructor(props) {
        super(props);
        this.state = {
            email: 'paksi.hnl@gmail.com',
            error: '',
            loading: false,            
        };

        this.forgotPassword = this.forgotPassword.bind(this);
        
    }

    forgotPassword () {
        const { email } = this.state;
        this.setState({ error: '', loading: true });
        const url = `${BASEURL}/api/pengguna/reset`;
        axios.post(url, {
            email: email,
        })
        .then((response) => {
           //handel berhasil
           console.log(response)
           this.props.navigation.navigate('NewPassword');
        })
        .catch((err)=> {
            console.log("error is: " + err);
            this.props.navigation.navigate('Forgot');
        })

    .done();
    }

    render() {
        const { email, error, loading } = this.state;
        const { form, section, errorTextStyle } = styles;

        return (
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image style={{ width: 150, height: 200 }}
                        source={require('../menu/reset1.jpg')} />
                </View>
               
                <View style={styles.containerForm}>

                <Text style={errorTextStyle}>
                        {error}
                    </Text>

                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Email"
                        placeholderTextColor="green"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        label="Email"
                        value={email}
                        onChangeText={email => this.setState({ email })}
                    /*onSubmitEditing={() => this.password.focus()}*/
                    />
                  
                    {!loading ?
                    <Button onPress={this.forgotPassword}>
                    Send Email
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
