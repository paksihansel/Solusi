import React, { Component } from 'react';
import { Image } from 'react-native';

import AuthLoading from './tabscreen/Authloading';
import Login from './Login';
import Home from './Home';
import News from './news';
import Profile from './profile';
import Inbox from './inbox';
import Task from './Task';
import SubTask from './subtask';
import Cuti from './cuti';
import ProfileUser from './profiluser';
import Gaji from './slipgaji';
import Peminjaman from './peminjaman';
import TimSaya from './timsaya';
import InfoAkun from './InfoAkun';
import Setting from './setting';
import VisiMisi from './visimisi';
import About from './about';
import Rpassword from './r_password';
import Forgot from './Forgot';
import NewPassword from './NewPassword';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  News: {
    screen: News,
  },
  Profile: {
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
  },
  ProfileUser: {
    screen: ProfileUser,
  },
  Gaji: {
    screen: Gaji,
  },
  Peminjaman: {
    screen: Peminjaman,
  },
  TimSaya: {
    screen: TimSaya,
  },
  InfoAkun: {
    screen: InfoAkun,
  },
  Setting: {
    screen: Setting,
  },
  VisiMisi: {
    screen: VisiMisi,
  },
  About: {
    screen: About,
  },
  Rpassword: {
    screen: Rpassword,
  }
});


const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  }
},
  { headerMode: 'none' });

const AuthReset = createStackNavigator({
  Forgot: {
    screen: Forgot
  },
  NewPassword: {
    screen: NewPassword
  }
},
  { headerMode: 'none' });

const AppContaner = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: {
      screen: AuthLoading,
    },
    App: AppStack,
    Auth: AuthStack,
    AuthRst: AuthReset
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
export default class App extends React.Component {

  render() {
    return (
      <AppContaner />
    );
  }
}