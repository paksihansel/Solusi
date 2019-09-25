import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    TextInput,
    AsyncStorage


} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStack from './navigation';
import axios from 'axios';
import { Input, TextLink, Loading, Button } from '../components/common';



export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };

        this.loginUser = this.loginUser.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    componentDidMount() {
        this._login().done();
    }
    
    _login = async() => {
        var value = await AsyncStorage.getItem('id');
        if (value !== null) {
            this.props.navigation.navigate('Home')
        }
    }

    loginUser() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        // NOTE Post to HTTPS only in production
        axios.post("https://19ef5b98.ngrok.io/api/pengguna/login", {
            email: email,
            password: password
        })
            .then((response) => {
                AsyncStorage.setItem('id', response.id);
                this.props.navigation.navigate('Home');
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                this.onLoginFail();
            })
        .done();
    }

    onLoginFail() {
        this.setState({
            error: 'Login Failed',
            loading: false
        });
    }


    render() {
        const { email, password, error, loading } = this.state;
        const { form, section, errorTextStyle } = styles;

        return (
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image style={{ width: 150, height: 200 }}
                        source={require('../menu/masuk.png')} />
                </View>

                <View style={styles.containerForm}>

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

                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="green"
                        label="Password"
                        value={password}
                        onChangeText={password => this.setState({ password })}
                    /*ref={(input) => this.password = input}*/
                    />

                    <Text style={errorTextStyle}>
                        {error}
                    </Text>

                    {!loading ?
                        <Button onPress={this.loginUser}>
                            Login
                    </Button>
                        :
                        <Loading size={'large'} />
                    }

                </View>

            </View>
        )
    }
}



const styles = {
    container: {
        backgroundColor: '#FAFAFA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
