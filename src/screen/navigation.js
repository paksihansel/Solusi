import React, {Component} from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';



import Home from './Home';
import News from './news';
import Profile from './profile';
import Inbox from './inbox';
import Task from './Task';
import SubTask from './subtask';
import Cuti from './cuti'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    News: {
      screen: News,
    },
    Profile:{
      screen: Profile,
    },
    Inbox: {
      screen: Inbox,
    },
    Task: {
      screen: Task,
    },
    SubTask: {
      screen: SubTask,
    },
    Cuti: {
      screen: Cuti,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}