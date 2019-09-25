import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import TestScreen from './TestScreen';

const bottomTabNavigatorConfig = {
   tabBarOpts : {
      activeTintColor: "tomato",
      inactiveTintColor: "grey",
      labelStyle: { fontSize: 15 }
   },
   defNavOpts : ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "HOME":
            iconName = "ios-home";
            break;
          case "PROFILE":
            iconName = "ios-person";
            break;
          default:
            break;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
   })
}

const _HomeStackScreen = createStackNavigator({
   _HOME : {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
         header: null
      })
   },
   TEST :{
      screen: TestScreen,
      navigationOptions: ({ navigation }) => ({
         headerTitle: 'TEST TITLE'
      })
   }
})

export default createBottomTabNavigator({
   HOME : {
      screen: _HomeStackScreen,
      navigationOptions: ({ navigation }) => ({
         tabBarVisible : navigation.state.index > 0 ? false :true
      })
   },
   PROFILE: {
      screen: ProfileScreen
   }
},{
   tabBarOptions: bottomTabNavigatorConfig.tabBarOpts,
   defaultNavigationOptions:bottomTabNavigatorConfig.defNavOpts
})