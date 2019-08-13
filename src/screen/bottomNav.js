
import React from 'react';
import {
    Image,
    Text
} from 'react-native';

import {
    createAppContainer,
    createMaterialTopTabNavigator,
} from 'react-navigation'

import BottomTab_Home from './tabScreens/Home';
import BottomTab_Profile from './tabScreens/Profile';

const BottomTab = createAppContainer(createMaterialTopTabNavigator(
    {
        BottomTab_Home: {
            screen: BottomTab_Home,
            navigationOptions: {
                tabBarIcon:
                <Image style={{width: 26, height: 26}} source = {require('./src/icon/home-active.png')}/>
                <Text style={styles.textnav}>Home</Text>
            },
        },
        BottomTab_Profile: {
            screen: BottomTab_Profile,
            navigationOptions: {
                tabBarIcon: <Image
                                resizeMode = "contain"
                                source = {require("../icons/profile.png")}
                                style = {{
                                    height: 30,
                                    width: 30,
                                }}
                            />,
            },
        },
    },
    {
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: "dimgray",
                height: 4,
            },
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: "lightgray",
            },
            tabStyle: {
                height: 50,
            },
        },
        tabBarPosition: "bottom",
    },
))

export default class BottomTabNavigatorModule extends React.Component {
    static router = BottomTab.router

    static navigationOptions = {
        title: "Bottom Tab Navigator",
    }

    render() {
        return (
            <BottomTab />
        )
    }
}

const styles = StyleSheet.create({
    textnav: {
      fontSize: 10,
      color: '#545454',
      marginTop: 4